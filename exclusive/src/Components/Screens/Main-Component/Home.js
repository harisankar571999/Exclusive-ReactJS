import React from 'react'
import TopHeader from '../TopHeader'
import NavMenu from '../NavMenu'
import AppleOffer from '../AppleOffer'
import Category from '../Category'
import Products from '../Products'
import Customer from '../Customer'
import Footer from '../Footer'
import { Helmet } from 'react-helmet'
import Common from '../Common'

function Home() {
  return (
    <div>
     <Helmet>
        <title>Exclusive</title>
     </Helmet>
      <TopHeader/>
      <NavMenu/>
      <AppleOffer/>
      <Common/>
      <Customer/>
      <Footer/>
    </div>
  )
}

export default Home
