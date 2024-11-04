import React from 'react'
import TopHeader from './TopHeader'
import NavMenu from './NavMenu'
import Footer from './Footer'
import Single  from '../JSON/SinglePage.json'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'


function SinglePage() {
  const {id}  = useParams()
  const singlePage = Single.find(item => item.id === parseInt(id))


  return (
    <div>
      <Helmet>
        <title>Exclusive | {singlePage.title}</title>
      </Helmet>
      <TopHeader/>
      <NavMenu/>
      <div className='mt-[80px] mx-auto w-[90%] font-poppinReg flex gap-[12px] items-center'>
          <div className='text-[rgba(0,0,0,.4)]'>Home</div>
          <span className='text-[rgba(0,0,0,.4)]'>/</span>
          <span className='text-[rgba(0,0,0,.4)]'>Products</span>
          <span className='text-[rgba(0,0,0,.4)]'>/</span>
          <span className='text-[#000]'>{singlePage.title}</span>
      </div>
      <div  className='mt-[80px] mx-auto w-[90%] pb-[140px]'>

        <ul className='flex gap-[70px] justify-center w-[100%]'>
            <li className='w-[50%] h-[600px]'>
                <div className='bg-[#f5f5f5] w-[100%] h-[600px] flex items-center justify-center'>
                    <div className='w-[450px] h-[315px]'>
                        <img src={singlePage.image} alt={singlePage.imgAlt} className='w-[450px] h-[315px]'/>
                    </div>
                </div>
            </li>
            <li className='self-center w-[50%]'>
                <div className='flex flex-col gap-[16px]' >
                    <h1 className='font-interSemi text-[24px]'>{singlePage.title}</h1>
                    <div className='flex flex-col gap-[16px]'>
                        <div  className='flex items-center gap-[8px]'>
                            <div className='self-center'>
                                <img src={singlePage.rating} alt="Four Star.png" />
                            </div>
                            <div className='flex items-center gap-[16px]'>
                                <span className='font-poppinReg text-[14px] text-[#000] opacity-[50%]'>({singlePage.review})</span>
                                <span className='w-[16px] h-0 border-[.5px] rotate-[90deg] border-[#000] opacity-[50%]'></span>
                                <div className={`${singlePage.stock ? '' : 'hidden'}`}>
                                  <span className='font-poppinSemi text-[14px] text-[#00ff66] '>In Stock</span>
                                </div>
                                <div className={`${singlePage.stock ? 'hidden' : ''}`}>
                                  <span className='font-poppinSemi text-[14px] text-[#d46666] '>Out of Stock</span>
                                </div>
                            </div>
                            
                        </div> 
                        <div className='font-interBold text-[18px]'>${singlePage.cost}</div>
                        <div>
                            <p className='font-poppinReg text-[16px]'>PlayStation 5 Controller Skin High quality vinyl with air<br/>
                               channel adhesive for easy bubble free install & mess <br/>
                               free removal Pressure sensitive.
                            </p>
                        </div>
                        <div className={`flex gap-[24px] items-center ${singlePage.colorDiv ? '' :  'hidden'}`}>

                            <h4 className='font-interReg trext-[20px]'>Colors:</h4>
                            <div>
                                <img src={singlePage.color} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className=' flex items-center gap-[16px] w-[400px] h-[90px] border-[rgba(0,0,0,.4)] border-[1px] rounded-t-[4px] pl-[16px] pt-[24px] pr-[20px] pb-[16px]'>
                                 <div>
                                    <img src={require('../Assets/icon-delivery.svg').default} alt="" />
                                 </div>
                                 <div>
                                    <h3 className='text-[16px] font-poppinMed'>Free Delivery</h3>
                                    <p className='text-[12px] font-poppinMed underline'>Enter your postal code for Delivery Availability</p>
                                 </div>
                            </div>
                            <div className='flex items-center  gap-[16px] w-[400px] h-[90px] border-[rgba(0,0,0,.4)] border-[1px] border-t-0 rounded-b-[4px] pl-[16px] pt-[24px] pr-[20px] pb-[16px]'>
                                 <div>
                                    <img src={require('../Assets/Icon-return.svg').default} alt="" />
                                 </div>
                                 <div>
                                    <h3 className='text-[16px] font-poppinMed'>Return Delivery</h3>
                                    <p className='text-[12px] font-poppinMed'>Free 30 Days Delivery Returns. <span className='underline'>Details</span></p>
                                 </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </li>
        </ul>
      </div>
      <Footer/>
    </div>
  )
}

export default SinglePage
