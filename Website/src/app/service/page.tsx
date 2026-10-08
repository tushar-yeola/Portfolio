 
import Service from '@/components/service'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Services | Tushar Yeola - AI & Full Stack Developer',
  description: 'Services offered by Tushar Yeola - AI & Full Stack Developer.',
}


export default function index() {
  return (
    <Wrapper>
      <Service />
    </Wrapper>
  )
}
