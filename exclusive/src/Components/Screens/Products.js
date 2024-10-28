import React from 'react'
import Product from '../JSON/Products.json'
import Customer from './Customer'
import { Link } from 'react-router-dom'
function Products() {
   const renderProducts=()=>(
    Product.map(card=>(
            <li className='w-[100%] flex flex-col gap-[16px] group'>
                <div className='relative'>
                    <div className='bg-[#F5F5F5] rounded-[4px] relative flex justify-center items-center h-[250px]'>
                        <div>
                           <img src={card.image} alt={card.imgAlt}/>
                        </div>
                        <div>
                            <div className='absolute top-[12px] right-[12px] bg-[#fff] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center'> 
                                <img src={require("../Assets/wishlist.svg").default} alt="wishlist.svg" />
                            </div>
                            <div className='absolute top-[60px] right-[12px]  bg-[#fff] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center'>
                                <img src={require("../Assets/Quick View.svg").default} alt="quick-view.svg"/>
                            </div>
                        </div>
                        <div className={card.new}>
                            <div className='bg-[#00FF66] px-[12px] py-[4px] rounded-[4px] text-[#FAFAFA] text-[12px] font-poppinReg absolute top-[12px] left-[12px]' >New</div>
                        </div>
                    </div>
                    <button className='w-[100%] h-[41px] absolute bottom-[0px] bg-[#000] rounded-b-[4px] font-poppinMed text-[16px] text-[#fff] hidden group-hover:block'>Add to Cart</button>
                </div>
                <div className='flex flex-col gap-[8px]'>
                    <div className='font-poppinMed text-[16px]'>
                                {card.title}
                    </div>
                    <div className='flex gap-[8px]'>
                        <div className='font-poppinMed text-[16px] text-[#db4444]'>${card.cost}</div>
                        <div>
                            <img src={card.rating} alt="four-star.png"/>
                        </div>
                        <div className='text-[rgba(0,0,0,0.5)] font-poppinSemi'>({card.review})</div>
                    </div>
                    <div ><img src={card.color} alt={card.colorAlt}/></div>
                </div>
            </li>
    ))
     
   )
  return (
    <div>
        <div className='mt-[54px] mx-auto w-[90%] border-b-[1px] border-solid border-[rgba(0,0,0,0.2)] pb-[30px]'>
            <ul className='grid grid-cols-4 gap-x-[30px]  gap-y-[60px]'>
               {renderProducts()}
            </ul>
        </div>
        <div className='text-center mt-[30px]'>
           <Link to={'/allproducts'}><button className='px-[48px] py-[16px] bg-[#db4444] rounded-[4px] text-[#fafafa] text-[16px] font-poppinMed'>View  All Products</button></Link>
        </div>
    </div>
    
  )
}

export default Products
