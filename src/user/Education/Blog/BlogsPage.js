import React from 'react'
import Hero from './Hero'
import News from './News'
import UpcomingEvents from './UpcomingEvents'
import Newsletter from './Newsletter'

const BlogsPage = () => {
  return (
    <div>
      
      <p className='text-4xl px-20 py-10'>Exploring Scholarships: Dive into Our Informative Blogs</p>

      <Hero />

      <News />

      <UpcomingEvents />

      <Newsletter />

    </div>
  )
}

export default BlogsPage