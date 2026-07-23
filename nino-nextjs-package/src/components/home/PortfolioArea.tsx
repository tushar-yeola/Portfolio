"use client"
import React from 'react'

interface DataType {
  id: number;
  category: string;
  title: string;
  description: string;
  tags: string[];
  sourceCodeLink: string;
}

const portfolio_data: DataType[] = [
  {
    id: 1,
    category: "MACHINE LEARNING • AI",
    title: "Subsurface Ghost",
    description: "AI agricultural risk prediction using CNN and ViT models on Sentinel-2 satellite imagery, reaching 93.6% test accuracy with multilingual RAG-grounded crop advisories.",
    tags: ["PyTorch", "CNN", "ViT", "RAG"],
    sourceCodeLink: "https://github.com/tushar-yeola/Subsurface-Ghost",
  },
  {
    id: 2,
    category: "FINTECH • ANOMALY DETECTION",
    title: "Financial-Compliance-Transaction-Anomaly-Detection",
    description: "Real-time compliance & anomaly detection system cutting review effort by 60% with sub-200ms responses from concurrent backend services on imbalanced fraud data.",
    tags: ["Python", "Scikit-learn", "Feature Engineering", "Backend"],
    sourceCodeLink: "https://github.com/tushar-yeola/Financial-Compliance-Transaction-Anomaly-Detection",
  },
  {
    id: 3,
    category: "FULL STACK • AI",
    title: "Sahayata",
    description: "Digital mental wellness platform serving 200+ students. Features an ML recommendation engine, AI chatbot, and secure JWT-authenticated counsellor booking flow.",
    tags: ["ReactJS", "JWT Auth", "ML Engine", "REST APIs"],
    sourceCodeLink: "https://github.com/tushar-yeola/Sahayata",
  },
  {
    id: 4,
    category: "AGENTIC AI • LLMS",
    title: "Cognitive-Agent-Workflow",
    description: "Autonomous multi-agent research workflow built with LangGraph and LangChain, integrating RAG and Model Context Protocol (MCP) servers to automate literature review.",
    tags: ["LangGraph", "LangChain", "LLMs", "MCP"],
    sourceCodeLink: "https://github.com/tushar-yeola/Cognitive-Agent-Workflow",
  },
];

export default function PortfolioArea() {
  return (
    <div className="projects-area" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="section-title wow fadeInUp delay-0-2s">
              <h2 className="projects-heading">
                Building Ideas Into <br />
                <span className="accent-underline">
                  Intelligent Products
                  <svg className="scribble-underline" viewBox="0 0 350 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14C110 17 210 11 346 14" stroke="#FF9DA2" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>
              {/* <p className="projects-note">
                Explore a collection of AI systems, machine learning solutions, and scalable software engineered to create meaningful impact.
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gx-5 gy-5 justify-content-center">
          {portfolio_data.map((item) => (
            <div key={item.id} className="col-xl-6 col-lg-6 col-md-6 col-12" style={{ position: 'relative' }}>
              <div className="project-card">
                <div className="project-card-category">{item.category}</div>
                <h3 className="project-card-title">{item.title}</h3>
                <p className="project-card-desc">{item.description}</p>
                <div className="project-card-tags">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-card-footer">
                  <a href={item.sourceCodeLink} target="_blank" rel="noopener noreferrer" className="project-source-link">
                    Source Code
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="external-link-icon" style={{ marginLeft: '6px', verticalAlign: 'middle', display: 'inline-block' }}>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
