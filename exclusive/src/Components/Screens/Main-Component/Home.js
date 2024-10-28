import React from 'react'
import TopHeader from '../TopHeader'
import NavMenu from '../NavMenu'
import AppleOffer from '../AppleOffer'
import Category from '../Category'
import Products from '../Products'
import Customer from '../Customer'
import Footer from '../Footer'
import { Helmet } from 'react-helmet'

function Home() {
  return (
    <div>
     <Helmet>
        <title>Exclusive</title>
     </Helmet>
      <TopHeader/>
      <NavMenu/>
      <AppleOffer/>
      <Category/>
      <Products/>
      <Customer/>
      <Footer/>
    </div>
  )
}

export default Home
