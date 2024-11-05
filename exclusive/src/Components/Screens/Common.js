import React, { useState } from 'react'
import Category from './Category'
import Products from './Products'

function Common() {

   const [selectedState,setSelectedState] = useState(null)

   const categoryClick=(category)=>{

         setSelectedState(category)

   }

  return (
    <div>
      <Category  onCategoryClick={categoryClick} />
      <Products  selectedState={selectedState} setSelectedState={setSelectedState} />
    </div>
  )
}

export default Common
