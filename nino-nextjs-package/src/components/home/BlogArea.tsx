"use client"
import React from 'react'

interface BlogType {
  id: number;
  title: string;
  category: string;
  description: string;
}

const blog_data: BlogType[] = [
  {
    id: 1,
    title: "B.Tech - Computer Engineering",
    category: "Education",
    description: "CGPA 9.1/10 • 2024 – 2028",
  },
  {
    id: 2,
    title: "Core Coursework",
    category: "Academics",
    description: "DSA • OOP • Software Design • Databases • OS",
  },
  {
    id: 3,
    title: "Finalist- Mastercard CodeforChange'26 Hackathon",
    category: "Hackathon",
    description: "Leadership • Teamwork • Problem Solving",
  },
  {
    id: 4,
    title: "300+ Participant Onboarding",
    category: "Leadership",
    description: "25% faster check-in • 98% operational accuracy",
  },
  {
    id: 5,
    title: "AWS Project Intern",
    category: "Internship",
    description: "AWS • Intern • Real-World Solutions ",
  },
  {
    id: 6,
    title: "Winner- 24-Hour Fintech Hackathon",
    category: "Hackathon",
    description: "Team Lead — team of 4 — SARcastic AI",
  },
];

export default function BlogArea() {
  return (
    <>
      <section className="blog-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title wow fadeInUp delay-0-2s">
                <h2 className="blog-heading">Education & Experience</h2>
              </div>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            {blog_data.map((item) => (
              <div key={item.id} className="col-xl-4 col-lg-4 col-md-6 col-12">
                <div className="blog-post-card">
                  <div className="blog-post-card-header">
                    <h3 className="blog-post-card-title">{item.title}</h3>
                    <span className="blog-post-card-tag">{item.category}</span>
                  </div>
                  <p className="blog-post-card-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
