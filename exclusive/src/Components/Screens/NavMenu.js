import React from 'react'
import { Link,NavLink } from 'react-router-dom'

function NavMenu() {
  return (
        <>  <div className='relative'>
                <div className='pt-14 pb-2 border-b border-solid' >
                    <div className='mx-auto w-[90%] flex items-center justify-between'>
                        <div>
                            <Link to={"/"}><h1 className='font-interBold text-2xl'>Exclusive</h1></Link>
                        </div>
                        <div className=''>
                            <ul className='flex justify-between items-center font-poppinReg text-base gap-12 max-[800px]:gap-6  max-[700px]:hidden'>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/">Contact</NavLink></li>
                                <li><NavLink to="/">About</NavLink></li>
                                <li><NavLink to="/">Sign Up</NavLink></li>
                            </ul>
                        </div>
                        <div className='flex items-center gap-x-6 max-[950px]:gap-[15px] '>
                            <div className='flex items-center relative '>
                                <input type="text" placeholder='What are you looking for?' className='bg-[#F5F5F5] rounded pl-5 pr-14 py-2.5 text-xs/[8px] font-poppinReg max-[950px]:hidden '/>
                                <div className='absolute right-3'>
                                    <img src={require("../Assets/search.svg").default} alt="Search.svg"/>
                                </div>
                            </div>
                            <div className='hidden  max-[700px]:block'>
                                <div className='flex flex-col gap-[3px]' >
                                    <div className='w-[20px] h-[3px] rounded-[50px] bg-[#000]'></div>
                                    <div className='w-[20px] h-[3px] rounded-[50px] bg-[#000]'></div>
                                    <div className='w-[20px] h-[3px] rounded-[50px] bg-[#000]'></div>
                                </div>
                            </div>
                            <div className='hidden max-[950px]:block '>
                                    <img src={require("../Assets/search.svg").default} alt="Search.svg"/>
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
                <div className='absolute z-10 w-[100%] bg-[#fff] hidden'>
                    <ul className='flex flex-col items-center font-poppinReg font-bold gap-2 py-[20px] px-[2%] h-[-50px]'>
                        <NavLink to="/" className='w-[100%] '><li className=' text-center hover:bg-[rgb(0,255,255)] rounded-[4px] py-[10px]'>Home</li></NavLink>
                        <NavLink to="/" className='w-[100%] '><li className='w-[100%]  text-center hover:bg-[rgb(0,255,255)] rounded-[4px] py-[10px]'>Contact</li></NavLink>
                        <NavLink to="/" className='w-[100%] '><li className='w-[100%]  text-center hover:bg-[rgb(0,255,255)] rounded-[4px] py-[10px]'>About</li></NavLink>
                        <NavLink to="/" className='w-[100%] '><li className='w-[100%]  text-center hover:bg-[rgb(0,255,255)] rounded-[4px] py-[10px]'>Sign Up</li></NavLink>
                    </ul>
                </div>
            </div>
        </>
  )
}

export default NavMenu
