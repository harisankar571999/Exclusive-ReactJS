import React from 'react'
import {Link} from 'react-router-dom'
function TopHeader() {
  return (
    <div className='bg-black w-screen  relative'>
       <div className='px-10'>
          <div className='px-10'>
              <div className='flex items-center'>
                <div className='mx-auto text-white p-2'> 
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#"><b className='text-white underline'>ShopNow</b></a>
                </div>
                <div className='flex items-center flex-col' >
                    <div className='flex justify-end items-center gap-x-2'>
                        <span className='text-white'>English</span>
                        <div className='mt-1'>
                            <img src={require("../Assets/short-arrow-down.svg").default}/>
                        </div>
                    </div>
                    <div className='absolute top-11 bg-black opacity-80 rounded hidden'>
                        <ul className='flex flex-col ' >
                            <li className='text-white py-1 px-2'>English</li>
                            <li className='text-white py-1 px-2' >Malayalam</li>
                            <li className='text-white py-1 px-2'>Tamil</li>
                            <li className='text-white py-1 px-2'>Hindi</li>
                            <li className='text-white py-1 px-2'>Kannada</li>
                        </ul>
                    </div>
                </div>
              </div>
          </div>
       </div>
       
    </div>
  )
}
export default TopHeader
