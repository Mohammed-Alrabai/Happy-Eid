import React from 'react'
import Card from './Card'
import CreateCard from './CreateCard'
import Hero from './Hero'
import Navbar from './Navbar'
import Footer from './Footer'


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      <Footer/>
    </>
  )
}

export default Home