import React from 'react'
import TopHeader from './TopHeader'
import NavMenu from './NavMenu'
import Footer from './Footer'
import View from '../JSON/Allproducts.json'
import Products from './Products'

function ViewAll() {
const renderProducts=()=>(
    View.map(card => (
      <li className='w-[100%] flex flex-col gap-[16px] group max-[1040px]:w-[300px]'>
        <div  className='relative'>
            <div className='bg-[#F5F5F5] rounded-[4px] relative flex justify-center items-center h-[250px]'>
                <div>
                   <img src={card.image} alt={card.imgAlt}/>
                </div>
                <div className='absolute top-[12px] right-[12px] bg-[#fff] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center'>
                  <img src={require("../Assets/wishlist.svg").default} alt="wishlist.svg" />
                </div>
                <div className='absolute top-[60px] right-[12px]  bg-[#fff] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center'>
                    <img src={require("../Assets/Quick View.svg").default} alt="quick-view.svg" />
                </div>
                <div className={card.new}>
                   <div className='bg-[#00FF66] px-[12px] py-[4px] rounded-[4px] text-[#FAFAFA] text-[12px] font-poppinReg absolute top-[12px] left-[12px]'>New</div>
                </div> 
                <div className={card.red}>
                  <div className='bg-[#db4444] px-[12px] py-[4px] rounded-[4px] text-[#FAFAFA] text-[12px] font-poppinReg absolute top-[12px] left-[12px]'>-{card.discount}%</div>
                </div>
            </div>
            <button className='w-[100%] h-[41px] absolute bottom-[0px] bg-[#000] rounded-b-[4px] font-poppinMed text-[16px] text-[#fff] hidden group-hover:block'>Add to Cart</button> 
        </div>
          <div className='flex flex-col gap-[8px]'>
              <div className='font-poppinMed text-[16px]'>{card.title}</div>
              <div>
                <div className={`${card.colFlex ? 'flex flex-col gap-y-[8px]' : 'flex gap-[8px]'} `}>
                  <div className='font-poppinMed text-[16px] text-[#db4444]'>${card.cost} <span className={card.offSpan}><s className='text-[#000] opacity-[50%] line-through'>${card.off}</s></span></div>
                  <div className='flex gap-[8px]'>
                    <div>
                        <img src={card.rating} alt="four-star.png"/>
                    </div>
                    <div className='text-[rgba(0,0,0,0.5)] font-poppinSemi'>({card.review})</div>
                  </div>
                </div>
              </div>
              <div>
                <div class={card.colorDiv}><img src={card.color} alt={card.colorAlt}/></div>
              </div>
          </div>
    </li>
)))
  return (
    <div>
      <div className='mt-[80px] mx-auto w-[90%] font-poppinReg flex gap-[12px] items-center'>
          <div className='text-[rgba(0,0,0,.5)]'>Home</div>
          <span className='text-[rgba(0,0,0,.5)]'>/</span>
          <span className='text-[#000]'>Products</span>
      </div>
       <div  className='mt-[40px] mx-auto w-[90%] pb-[50px]'>
          <ul className='mt-[30px] grid grid-cols-4 gap-x-[30px]  gap-y-[60px] max-[1040px]:flex max-[1040px]:flex-wrap max-[1040px]:justify-center'>
               {renderProducts()}
          </ul>
       </div>
    </div>
  )
}
 
export default ViewAll
