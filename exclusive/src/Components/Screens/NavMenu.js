import React from 'react'
import { Link } from 'react-router-dom'
import TopHeader from './TopHeader'
import AppleOffer from './AppleOffer'
function NavMenu() {
  return (
        <>   
            <TopHeader/>
            <div className='pt-14 pb-2 border-b border-solid ' >
                <div className='mx-auto w-[90%] flex items-center justify-between '>
                    <div>
                        <Link to={"/"}><h1 className='font-interBold text-2xl'>Exclusive</h1></Link>
                    </div>
                    <div className=''>
                        <ul className='flex justify-between items-center font-poppinReg text-base gap-12'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Contact</Link></li>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/">Sign Up</Link></li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-x-6'>
                        <div className='flex items-center relative '>
                            <input type="text" placeholder='What are you looking for?' className='bg-[#F5F5F5] rounded pl-5 pr-14 py-2.5 text-xs/[8px] font-poppinReg'/>
                            <div className='absolute right-3'>
                                <img src={require("../Assets/search.svg").default} alt="Search.svg"/>
                            </div>
                        </div>
                        <div>
                            <img src={require("../Assets/wishlist.svg").default} alt="wishlist.svg"/>
                        </div>
                        <div>
                            <img src={require("../Assets/Cart.svg").default} alt="Cart.svg"/>
                        </div>
                    </div>
                </div>
            </div>
            <AppleOffer/>
        </>
  )
}

export default NavMenu
