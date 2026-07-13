import BannerSection from '@/components/BannerSection'
import Blog from '@/components/Blog'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import NewsletterSection from '@/components/NewsletterSection'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Features/>
      <Blog/>
      <BannerSection/>
      <NewsletterSection/>
    </div>
  )
}

export default Home