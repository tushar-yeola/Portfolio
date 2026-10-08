'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/plugins';

const expertise_data = [
  {
    id: '01',
    title: 'MACHINE LEARNING',
    text: 'Leveraging Python, Scikit-learn, XGBoost, Pandas, and NumPy to build predictive models, intelligent automation systems, and AI solutions that solve real-world problems through data-driven decision making.',
  },
  {
    id: '02',
    title: 'FULL STACK DEVELOPMENT',
    text: 'Building scalable web applications using React, Node.js, Express, FastAPI, REST APIs, MongoDB, and SQL, with a focus on seamless user experiences and production-ready backend systems.',
  },
  {
    id: '03',
    title: 'SOFTWARE ENGINEERING',
    text: 'Designing maintainable, scalable, and high-performance software by applying DSA, OOP, DBMS, SDLC, system design, testing, and clean architecture to build reliable real-world digital products.',
  },
  {
    id: '04',
    title: 'AGENTIC AI',
    text: 'Developing intelligent AI agents using LLMs, LangChain, LangGraph, RAG, MCP, AI Guardrails, and multi-agent workflows to automate complex tasks and build autonomous, context-aware applications.',
  },
];

export default function ExpertiseArea() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const circleRefs = useRef<(SVGCircleElement | null)[]>([]);
  const pathBgRef = useRef<SVGPathElement>(null);
  const pathActiveRef = useRef<SVGPathElement>(null);
  const pathMaskRef = useRef<SVGPathElement>(null);
  const [pathD, setPathD] = useState<string>('');
  const [cardCoords, setCardCoords] = useState<{ x: number; yTop: number; yBottom: number }[]>([]);

  // 1. Calculate path coordinates dynamically
  useEffect(() => {
    const updatePath = () => {
      const section = sectionRef.current;
      if (!section) return;

      const sectionRect = section.getBoundingClientRect();

      // Get centers and bounds of all cards relative to section
      const coords = cardRefs.current
        .map((card) => {
          if (!card) return null;
          const rect = card.getBoundingClientRect();
          const x = rect.left - sectionRect.left + rect.width / 2;
          const yTop = rect.top - sectionRect.top;
          const yBottom = rect.bottom - sectionRect.top;
          return { x, yTop, yBottom };
        })
        .filter(Boolean) as { x: number; yTop: number; yBottom: number }[];

      if (coords.length === 0) return;

      setCardCoords(coords);

      // Draw path: start exactly at Card 1's top-center node
      let d = `M ${coords[0].x} ${coords[0].yTop}`;
      d += ` L ${coords[0].x} ${coords[0].yBottom}`;

      for (let i = 1; i < coords.length; i++) {
        const prev = coords[i - 1];
        const curr = coords[i];
        const dy = (curr.yTop - prev.yBottom) * 0.25;
        d += ` C ${prev.x} ${prev.yBottom + dy}, ${curr.x} ${curr.yTop - dy}, ${curr.x} ${curr.yTop}`;
        d += ` L ${curr.x} ${curr.yBottom}`;
      }

      setPathD(d);
    };

    const section = sectionRef.current;
    if (!section) return;

    // Use ResizeObserver for highly robust dynamic layout changes
    const resizeObserver = new ResizeObserver(() => {
      updatePath();
    });

    resizeObserver.observe(section);
    cardRefs.current.forEach((card) => {
      if (card) resizeObserver.observe(card);
    });

    // Fallback timer to calculate after page paints
    const timer = setTimeout(updatePath, 200);

    window.addEventListener('resize', updatePath);

    return () => {
      resizeObserver.disconnect();
      clearTimeout(timer);
      window.removeEventListener('resize', updatePath);
    };
  }, []);

  // 2. Set up GSAP ScrollTrigger progressive drawing and card activation timeline
  useEffect(() => {
    if (!pathD || cardCoords.length === 0) return;

    const pathActive = pathActiveRef.current;
    const pathMask = pathMaskRef.current;
    const section = sectionRef.current;
    if (!pathActive || !pathMask || !section) return;

    // Explicitly register ScrollTrigger on client side
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const totalLength = pathMask.getTotalLength();

    // Helper binary search to find path length at a given Y coordinate
    const findLengthAtY = (path: SVGPathElement, targetY: number): number => {
      const totalL = path.getTotalLength();
      let low = 0;
      let high = totalL;
      let iterations = 0;
      while (low < high && iterations < 100) {
        const mid = (low + high) / 2;
        const pt = path.getPointAtLength(mid);
        if (Math.abs(pt.y - targetY) < 0.5) {
          return mid;
        }
        if (pt.y < targetY) {
          low = mid;
        } else {
          high = mid;
        }
        iterations++;
      }
      return low;
    };

    // Calculate cumulative path lengths at card bottom/exit coordinates
    const lengths = cardCoords.map((coord, idx) => {
      if (idx === cardCoords.length - 1) {
        return totalLength; // final card draws path to the end
      }
      return findLengthAtY(pathMask, coord.yBottom);
    });

    // Set initial dash offset to hide the mask completely
    gsap.set(pathMask, {
      strokeDasharray: totalLength,
      strokeDashoffset: totalLength,
    });

    const triggers: ScrollTrigger[] = [];

    // Create a ScrollTrigger for each card to orchestrate sequential drawing/transitions
    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const trigger = ScrollTrigger.create({
        trigger: card,
        start: 'top 60%', // trigger activation when card top is 60% of viewport
        onEnter: () => {
          // 1. Activate card class (triggers 450ms hardware-accelerated CSS transition)
          card.classList.add('expertise-card--active');

          // 2. Activate circular SVG node and trigger a single subtle pulse
          const circle = circleRefs.current[index];
          if (circle) {
            circle.classList.add('expertise-node--active');
            
            // Subtle pulse: scaling radius from 4.6 (1.15 * 4) to 6 and back to 4.6
            gsap.fromTo(circle, 
              { attr: { r: 4.6 } },
              { 
                attr: { r: 6 }, 
                duration: 0.25, 
                yoyo: true, 
                repeat: 1, 
                ease: 'power2.inOut' 
              }
            );
          }

          // 3. Draw active path mask segment to current card's exit length (700ms easeInOut)
          const targetLen = lengths[index];
          gsap.to(pathMask, {
            strokeDashoffset: totalLength - targetLen,
            duration: 0.7,
            ease: 'power2.inOut',
            overwrite: 'auto',
          });
        },
        onLeaveBack: () => {
          // Scroll up: deactivate Card index
          card.classList.remove('expertise-card--active');

          // Deactivate circular SVG node
          const circle = circleRefs.current[index];
          if (circle) {
            circle.classList.remove('expertise-node--active');
            gsap.killTweensOf(circle);
            gsap.to(circle, {
              attr: { r: 4 },
              duration: 0.45,
              ease: 'power2.inOut',
            });
          }

          // Retract path mask back to previous card's end length (or 0 if index is 0)
          const prevLen = index > 0 ? lengths[index - 1] : 0;
          gsap.to(pathMask, {
            strokeDashoffset: totalLength - prevLen,
            duration: 0.7,
            ease: 'power2.inOut',
            overwrite: 'auto',
          });
        }
      });

      triggers.push(trigger);
    });

    return () => {
      triggers.forEach((trig) => trig.kill());
      gsap.killTweensOf(pathMask);
      cardRefs.current.forEach((card, idx) => {
        if (card) card.classList.remove('expertise-card--active');
        const circle = circleRefs.current[idx];
        if (circle) {
          circle.classList.remove('expertise-node--active');
          gsap.killTweensOf(circle);
        }
      });
    };
  }, [pathD, cardCoords]);

  return (
    <>
      <section ref={sectionRef} className="testimonials-area expertise-scroll-section">
        
        {/* Dynamic Scroll Dotted Path SVG */}
        <div className="expertise-dynamic-svg-container" aria-hidden="true">
          <svg>
            <defs>
              <mask id="expertise-path-mask">
                <path
                  ref={pathMaskRef}
                  d={pathD || ''}
                  stroke="#FFFFFF"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </mask>
            </defs>
            <path
              ref={pathBgRef}
              d={pathD || ''}
              className="expertise-path-bg"
            />
            <path
              ref={pathActiveRef}
              d={pathD || ''}
              className="expertise-path-active"
              mask="url(#expertise-path-mask)"
            />
            {cardCoords.map((coord, idx) => (
              <circle
                key={idx}
                ref={(el) => { circleRefs.current[idx] = el; }}
                cx={coord.x}
                cy={coord.yTop}
                r={4}
                className="expertise-node"
              />
            ))}
          </svg>
        </div>

        <div className="container">

          {/* ── Top row: Header LEFT  |  Card 1 RIGHT ── */}
          <div className="expertise-top-row">
            <div className="expertise-header">
              <span className="expertise-label">My Expertise</span>
              <h2 className="expertise-main-title">
                Crafting AI-Powered<br />
                Software That Solves<br />
                Real-World Problems
              </h2>
            </div>

            {/* Card 1 — sits beside the header */}
            <div className="expertise-first-card-col">
              <div
                className="expertise-card"
                ref={(el) => { cardRefs.current[0] = el; }}
              >
                <div className="expertise-card-pin" />
                <span className="expertise-card-id">{expertise_data[0].id}</span>
                <h4 className="expertise-card-title">{expertise_data[0].title}</h4>
                <p className="expertise-card-text">{expertise_data[0].text}</p>
              </div>
            </div>
          </div>

          {/* ── Cards 2–4 in zigzag below ── */}
          <div className="expertise-cards-wrap">
            {/* Cards 2, 3, 4 — left / right / left */}
            {expertise_data.slice(1).map((item, index) => {
              const isRight = index % 2 !== 0;
              return (
                <div
                  key={item.id}
                  className={`expertise-card-row ${isRight ? 'expertise-card-row--right' : 'expertise-card-row--left'}`}
                >
                  <div
                    className="expertise-card"
                    ref={(el) => { cardRefs.current[index + 1] = el; }}
                  >
                    <div className="expertise-card-pin" />
                    <span className="expertise-card-id">{item.id}</span>
                    <h4 className="expertise-card-title">{item.title}</h4>
                    <p className="expertise-card-text">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
