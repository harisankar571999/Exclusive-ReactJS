import React from 'react'
import Category from './Category'

function AppleOffer() {
  return (
    <>
        <div className='bg-[#000] mx-auto w-[90%] mt-10 flex items-center justify-between rounded-[10px] ' >
          <div className='py-[110px] pl-[64px] flex flex-col gap-y-[20px]'>
            <div className='flex items-center gap-x-[24px]'>
              <div >
                <img src={require('../Assets/apple.svg').default} alt="apple.svg" />
              </div>
              <div className='text-[#FAFAFA] font-poppinReg'>iPhone 14 Series</div>
            </div>
            <div  className='text-[#FAFAFA] font-interSemi text-[48px]'>Up to 10% <br/>off Voucher</div>
            <div className='flex items-center gap-x-[8px]'>
              <p  className='text-[#FAFAFA] font-poppinReg border-b border-solid pb-[4px]'>Shop now</p>
              <div>
                <img src={require('../Assets/Vector.svg').default} alt="Vector.svg"/>
              </div>
            </div>
          </div>
          <div className='w-[610px] h-[460px]'>
            <img src={require('../Assets/hero_endframe__cvklg0xk3w6e_large 2.png')} alt="iPhone.png" />
          </div>
        </div>
    </>
  )
}

export default AppleOffer
