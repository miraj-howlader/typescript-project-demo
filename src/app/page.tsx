import BannerSection from '@/components/BannerSection'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import NewsletterSection from '@/components/NewsletterSection'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Features/>
      <BannerSection/>
      <NewsletterSection/>
    </div>
  )
}

export default Home