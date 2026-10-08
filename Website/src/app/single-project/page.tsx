 
import SingleProject from '@/components/single-project'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Project Details | Tushar Yeola - AI & Full Stack Developer',
  description: 'Project Details - Tushar Yeola | AI & Full Stack Developer.',
}


export default function index() {
  return (
    <Wrapper>
      <SingleProject />
    </Wrapper>
  )
}
