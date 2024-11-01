import React from 'react'
import Footer from './Footer'

function Customer() {
  return (
    <div>
        <div className='mx-auto w-[90%]'>
            <ul className='px-[114px] pt-[94px] pb-[140px] flex justify-center gap-[88px] customer text-[20px] max-[550px]:px-[0px] '>
                <li className='flex items-center flex-col gap-[24px]'>
                    <div >
                        <img src="../Assets/delivery.png" alt="delivery.png" />
                    </div>
                    <div className='flex flex-col items-center gap-[8px]'>
                        <div className='font-semibold text-[20px] max-[550px]:text-[18px]'>FREE AND FAST DELIVERY</div>
                        <div className='font-poppinReg text-[14px] max-[550px]:text-[12px] '>Free delivery for all orders over $140</div>
                    </div>
                </li>
                <li className='flex items-center flex-col gap-[24px]'>
                    <div>
                        <img src="../Assets/support.png" alt="delivery.png"/>
                    </div>
                    <div className='flex flex-col items-center gap-[8px]'>
                        <div className='font-semibold text-[20px] max-[550px]:text-[18px]'>24/7 CUSTOMER SERVICE</div>
                        <div className='font-poppinReg text-[14px]  max-[550px]:text-[12px]'>Friendly 24/7 customer support</div>
                    </div>
                </li>
                <li className='flex items-center flex-col gap-[24px]'>
                    <div>
                        <img src="../Assets/Money-back.png" alt="delivery.png"/>
                    </div>
                    <div className='flex flex-col items-center gap-[8px]'>
                        <div className='font-semibold text-[20px] max-[550px]:text-[18px]'>MONEY BACK GUARANTEE</div>
                        <div className='font-poppinReg text-[14px]  max-[550px]:text-[12px]'>We return money within 30 days</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Customer
