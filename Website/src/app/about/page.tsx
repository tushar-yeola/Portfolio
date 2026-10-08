
import About from '@/components/about'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'About | Tushar Yeola - AI & Full Stack Developer',
  description: 'About Tushar Yeola - Passionate Full Stack and AI Developer building scalable and intelligent applications.',
}


export default function index() {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  )
}
