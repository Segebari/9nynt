import React from 'react'
import AboutHero from '../components/Aboutpage/AboutHero'
import Ourprocess from '../components/Aboutpage/Ourprocess'
import Takecontrol from '../components/Aboutpage/Takecontrol'
import Why from '../components/Aboutpage/Why'
import Simplify from '../components/Aboutpage/Simplify'
import Work from '../components/Aboutpage/Work'
import Pricing from '../components/Aboutpage/Pricing'
import Payment from '../components/Aboutpage/Payment'
import Faq from '../components/homepage/Faq'
import Download from '../components/homepage/Download'
import Footer from '../components/Footer'

function About() {
  return (
    <>
      <AboutHero />
      <Ourprocess />
      <Takecontrol />
      <Why />
      <Simplify />
      <Work />
      <Pricing />
      <Payment />
      <Faq />
      <Download />
      <Footer />
    </>
  )
}

export default About
