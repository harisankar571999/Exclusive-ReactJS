import React from 'react'
import TopHeader from '../TopHeader'
import NavMenu from '../NavMenu'
import ViewAll from '../ViewAll'
import Footer from '../Footer'
import { Helmet } from 'react-helmet'

function AllProducts() {
  return (
    <div>
      <Helmet>
        <title>Exclusive  |  AllProducts</title>
      </Helmet>
      <TopHeader/>
      <NavMenu/>
      <ViewAll/>
      <Footer/> 
    </div>
  )
}

export default AllProducts
