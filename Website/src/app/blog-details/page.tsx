

import React from 'react'

import type { Metadata } from 'next'
import Wrapper from '@/layouts/Wrapper'
import BlogDetails from '@/components/blog-details'
export const metadata: Metadata = {
  title: 'Blog Details | Tushar Yeola - AI & Full Stack Developer',
  description: 'Blog Details - Tushar Yeola | AI & Full Stack Developer.',
}


export default function index() {
  return (
    <Wrapper>
      <BlogDetails />
    </Wrapper>
  )
}
