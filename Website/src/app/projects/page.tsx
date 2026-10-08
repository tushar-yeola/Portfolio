import Projects from '@/components/projects' 
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Projects | Tushar Yeola - AI & Full Stack Developer',
  description: 'Projects by Tushar Yeola - AI & Full Stack Developer.',
}


export default function index() {
  return (
    <Wrapper>
      <Projects />
    </Wrapper>
  )
}
