
import React from 'react'
import HeroArea from './HeroArea'
import BrandArea from './BrandArea'
import AboutArea from './AboutArea'
import HeaderOne from '@/layouts/headers/HeaderOne'
import PortfolioArea from './PortfolioArea'
import ExpertiseArea from './ExpertiseArea'
import BlogArea from './BlogArea'
import ContactArea from './ContactArea'
import FooterOne from '@/layouts/footers/FooterOne'

export default function Home() {
  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroArea />
            <AboutArea />
            <ExpertiseArea />
            <PortfolioArea />
            <BlogArea />
            <BrandArea />
            <ContactArea />
          </main>
          <FooterOne />
        </div>
      </div>
    </>
  )
}
