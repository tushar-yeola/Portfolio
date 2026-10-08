"use client"
import React, { useEffect } from 'react'

const certificate_data = [
  {
    id: '01',
    category: 'MACHINE LEARNING',
    title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
    issuer: 'DeepLearing.AI • Coursera • Stanford University',
    verificationCode: 'COURSERA-ML-NG782',
    link: 'https://www.coursera.org/account/accomplishments/verify/R2PMTVS9M8YM',
    platform: 'Coursera',
    sysId: '101'
  },
  {
    id: '02',
    category: 'MACHINE LEARNING',
    title: 'Supervised Machine Learning: Regression & Classification',
    issuer: 'DeepLearing.AI • Coursera • Stanford University',
    verificationCode: 'COURSERA-ML-NG781',
    link: 'https://www.coursera.org/account/accomplishments/verify/MJANLQWQ1P19',
    platform: 'Coursera',
    sysId: '102'
  },
  {
    id: '03',
    category: 'MACHINE LEARNING',
    title: 'Advanced Learning Algorithms',
    issuer: 'DeepLearing.AI • Coursera • Stanford University',
    verificationCode: 'COURSERA-ML-NG783',
    link: 'https://www.coursera.org/account/accomplishments/verify/UF5ODZK5S7ML',
    platform: 'Coursera',
    sysId: '103'
  },
  {
    id: '04',
    category: 'DSA • C++',
    title: 'Alpha Plus - DSA with C++',
    issuer: 'Apna College',
    verificationCode: 'Alpha-Plus-C1376',
    link: 'https://drive.google.com/file/d/1uk41l0OaIOkXJeuVODxHXGIpwWBUSxOf/view?usp=drive_link',
    platform: 'Apna College',
    sysId: '104'
  },
  {
    id: '05',
    category: 'MACHINE LEARNING',
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearing.AI • Andrew NG',
    verificationCode: 'COURSERA-52413',
    link: 'https://coursera.org/verify/specialization/EXUPM6YAG6EN',
    platform: 'Forage',
    sysId: '105'
  },
  {
    id: '06',
    category: 'WEB DEVELOPMENT',
    title: 'The Complete 2024 Web Development Bootcamp',
    issuer: 'Dr. Angela Yu - Udemy',
    verificationCode: 'UDEMY-WD-BOOT2024',
    link: 'https://udemy.com',
    platform: 'Udemy',
    sysId: '106'
  },
  {
    id: '07',
    category: 'DEEP LEARNING',
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI - Andrew Ng - Coursera',
    verificationCode: 'COURSERA-DL-SPEC449',
    link: 'https://coursera.org',
    platform: 'Coursera',
    sysId: '107'
  }
];

export default function BrandArea() {

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      const scrollers = document.querySelectorAll(".scroller");
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");
        const scrollerInner = scroller.querySelector(".scroller__inner");
        if (!scrollerInner) return;
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <>
      <div id="certifications" className="company-design-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Certifications</h2>
              <div className="company-list">
                <div className="cert-connector-line"></div>
                <div className="scroller" data-direction="left" data-speed="slow">
                  <div className="scroller__inner">
                    {certificate_data.map((cert) => (
                      <div key={cert.id} className="certificate-card-wrapper">
                        <div className="certificate-card-inner">

                          {/* Front Side */}
                          <div className="certificate-card-front">
                            <div className="cert-pin"></div>
                            <div className="cert-header">
                              <span className="cert-category">{cert.category}</span>
                              <span className="cert-id">{cert.id}</span>
                            </div>
                            <h4 className="cert-title">{cert.title}</h4>
                            <div className="cert-divider"></div>
                            <div className="cert-footer">
                              <span className="cert-issued-label">ISSUED BY</span>
                              <span className="cert-issuer">{cert.issuer}</span>
                            </div>
                          </div>

                          {/* Back Side */}
                          <div className="certificate-card-back">
                            <div className="cert-pin"></div>
                            <div className="cert-back-header">
                              <span className="cert-shield-badge">
                                <i className="ri-shield-check-fill"></i>
                              </span>
                              <span className="cert-credential-label">CREDENTIAL</span>
                            </div>
                            <div className="cert-back-body">
                              <span className="cert-verification-code">VERIFICATION CODE: {cert.verificationCode}</span>
                              <h4 className="cert-back-title">{cert.title}</h4>
                              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-verify-btn">
                                Verify on {cert.platform} <i className="ri-external-link-line"></i>
                              </a>
                            </div>
                            <div className="cert-back-footer">
                              <span className="cert-sys-id">SYS ID: #{cert.sysId}</span>
                              <span className="cert-verified-status">VERIFIED</span>
                            </div>
                          </div>

                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
