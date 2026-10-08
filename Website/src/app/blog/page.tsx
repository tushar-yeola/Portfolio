import Blog from '@/components/blog'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Blog | Tushar Yeola - AI & Full Stack Developer',
  description: 'Blog by Tushar Yeola - AI & Full Stack Developer.',
}

export default function index() {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  )
}
