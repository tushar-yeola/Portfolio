 
import React from 'react'

import type { Metadata } from 'next'  
import Home from '@/components/home'
import Wrapper from '@/layouts/Wrapper'
export const metadata: Metadata = {
  title: 'Tushar Yeola | AI & Full Stack Developer',
  description: 'Passionate Full Stack and AI Developer building scalable and intelligent applications.',
}


export default function index() {
  return (
    <Wrapper>
     <Home /> 
    </Wrapper>
  )
}
