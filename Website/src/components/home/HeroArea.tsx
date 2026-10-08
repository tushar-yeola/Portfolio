
"use client"

import React from 'react'
import Link from 'next/link'
import { ScrollSmoother } from '@/plugins'

export default function HeroArea() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      try {
        const smoother = ScrollSmoother.get();
        if (smoother) {
          smoother.scrollTo('#contact', true);
          window.history.pushState(null, '', '#contact');
          return;
        }
      } catch (err) {
        // Fallback to native scroll
      }
      contactElem.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#contact');
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <>
      <section id="home" className="main-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">

              <div className="hero-content wow fadeInUp text-center delay-0-2s">
                <h3>Tushar Yeola</h3>
              </div>

            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 pt-30">

              {/* <div className="hero-content wow fadeInUp delay-0-2s">
                <div className="clienti-reviews">
                  <ul className="clienti-profile">
                    <li>
                      <img className="img-fluid" src="assets/images/avatar/01.jpg" alt="client" />
                    </li>
                    <li>
                      <img className="img-fluid" src="assets/images/avatar/02.jpg" alt="client" />
                    </li>
                    <li>
                      <img className="img-fluid" src="assets/images/avatar/03.jpg" alt="client" />
                    </li>
                  </ul>
                  <div className="reviews">100+ reviews <span>(4.96 of 5)</span>
                    <p>Five-star reviews from my esteemed clients.</p>
                  </div>
                </div>
              </div> */}

            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <img src="assets/images/about/image.png" alt="" />
              </div>

            </div>
            <div className="col-lg-3 pt-30">
              <div className="hero-content wow fadeInUp delay-0-4s">
                <p>Hi, I’m Tushar, a passionate Full Stack and AI Developer building scalable and intelligent applications.</p>
                <Link className="theme-btn" href="/#contact" onClick={handleScrollToContact}>
                  Get In touch
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
