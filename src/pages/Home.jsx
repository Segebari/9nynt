import React from 'react'
import Hero from '../components/homepage/Hero'
import Features from '../components/homepage/Features'
import Quicksteps from '../components/homepage/Quicksteps'
import Faq from '../components/homepage/Faq'
import Download from '../components/homepage/Download'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Hero></Hero>
      <Features></Features>
      <Quicksteps></Quicksteps>
      <Faq></Faq>
      <Download></Download>
      <Footer></Footer>
    </>
  )
}

export default Home
