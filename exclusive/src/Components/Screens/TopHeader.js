import React from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom'
function TopHeader() {
  return (
    <>
        <div className='bg-black   relative max-[650px]:pb-[20px]'>
            <div className='px-10'>
                <div className='pr-10 max-[900px]:pr-0 max-[700px]:pr-[10px]'>
                    <div className='flex items-center max-[650px]:flex-col max-[650px]:gap-[10px]'>
                        <div className='mx-auto text-white p-2 font-poppinReg text-sm  text-center'> 
                            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link><b className='text-white underline font-poppinReg text-sm' >ShopNow</b></Link>
                        </div>
                        <div className='flex items-center flex-col' >
                            <div className='flex justify-end items-center gap-x-2'>
                                <span className='text-white font-poppinReg text-sm'>English</span>
                                <div>
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
    </>
  )
}
export default TopHeader
