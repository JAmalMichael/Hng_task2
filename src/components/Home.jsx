import React from 'react'
import Header from './Header'
import About from './About'
import Product from './Product'
import FooterSection from './FooterSection'
import Footer from './Footer'


function Home() {
  return (
    <div>
        <Header />
        <About />
        <Product />
        <FooterSection />
        <Footer />
    </div> 
  )
}

export default Home