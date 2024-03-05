import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Quicksteps from '../components/Quicksteps'
import Faq from '../components/Faq'
import Download from '../components/Download'
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
