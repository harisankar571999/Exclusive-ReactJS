import React,{useState} from 'react'
import TopHeader from './TopHeader'
import NavMenu from './NavMenu'
import Footer from './Footer'
import Single  from '../JSON/SinglePage.json'
import { useParams,Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import List from  '../JSON/Allproducts.json'

function SinglePage() {
  const {id}  = useParams()
  const singlePage = Single.find(item => item.id === parseInt(id))

  const[like,setLike]=useState(Array(List.length).fill(false))

    const wishList=(index)=>{
    const newLikes = [...like]
    newLikes[index]=!newLikes[index]
    setLike(newLikes)
   }
   
  const filtered = singlePage ? List.filter((item)=> {
    if( item.category===singlePage.category && item.title!=singlePage.title )
        return item
    
    
   }) :[]

  const renderProducts=()=>(
    filtered.map((card,index) => (
        <li key={card.index} className='w-[100%] flex flex-col gap-[16px] group max-[1040px]:w-[300px] rounded-[4px] transition-all duration-500 ease-in-out hover:scale-[1.1] hover:shadow-[16px_16px_16px_16px_rgba(0,0,0,.1)]'>
          <div  className='relative'>
              <div className='bg-[#F5F5F5] rounded-[4px] relative flex justify-center items-center h-[250px]'>
                  <div>
                    <img src={card.image} alt={card.imgAlt}/>
                  </div>
                  <div className={`absolute top-[12px] right-[12px] bg-[#fff] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center `} onClick={() => wishList(index)}> 
                      <svg width="22" height="20" viewBox="0 0 22 20" fill={`${like[index] ? 'red' : '#fff'}`} xmlns="http://www.w3.org/2000/svg" className='transition-all duration-500 ease-in-out hover:scale-[1.1]'>
                          <path d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 
                              18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 
                              5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z" stroke={`${like[index] ? 'red' : '#000'}`} stroke-width="1.5" 
                              stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                  </div>
                  <div className='absolute top-[60px] right-[12px]  bg-[#fff] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center'>
                    <Link to={`/product/${card.id}`}> <img src={require("../Assets/Quick View.svg").default} alt="quick-view.svg" className='transition-all duration-500 ease-in-out hover:rotate-[180deg]' /></Link>
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
      <Helmet>
        <title>Exclusive | {singlePage.title}</title>
      </Helmet>
      <TopHeader/>
      <NavMenu/>
      <div className='mt-[80px] mx-auto w-[90%] font-poppinReg flex gap-[12px] items-center '>
          <div className='text-[rgba(0,0,0,.4)]'>Home</div>
          <span className='text-[rgba(0,0,0,.4)]'>/</span>
          <span className='text-[rgba(0,0,0,.4)]'>Products</span>
          <span className='text-[rgba(0,0,0,.4)]'>/</span>
          <span className='text-[#000]'>{singlePage.title}</span>
      </div>
      <div  className='mt-[80px] mx-auto w-[90%] pb-[140px]'>

        <ul className='flex gap-[70px] justify-center max-[1180px]:flex-col  max-[1180px]:items-center max-[1180px]:justify-center flex-direct  '>
            <li className='w-[700px] h-[600px] max-[1300px]:w-[424px] max-[1300px]:h-[400px]'>
                <div className='bg-[#f5f5f5] h-[600px] flex items-center justify-center max-[1180px]:w-[424px] pic-div'>
                    <div className='w-[450px] h-[315px] img-div'>
                        <img src={singlePage.image} alt={singlePage.imgAlt} className='w-[450px] h-[315px] image'/>
                    </div>
                </div>
            </li>
            <li className='self-center '>
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
      <div className='pb-[140px]'>
            <div className='mx-auto w-[90%] mt-[54px]'>
                <div className='flex items-center  gap-[16px]'>
                    <div className='w-[20px] h-[40px] rounded-[4px] bg-[#DB4444]'></div>
                    <h3 className='font-poppinSemi text-[16px] text-[#DB4444]'>Related Items</h3>
                </div>
            </div>
            <div className={`mt-[54px] mx-auto w-[90%]  pb-[30px] font-poppinSemi font-bold text-[36px] text-center ${filtered.length > 0? 'hidden' : ''}`}>Oops No Related Items Found!!!</div>
            <div className='mt-[54px] mx-auto w-[90%]  pb-[30px]'>
                <ul className='grid grid-cols-4 gap-x-[30px]  gap-y-[60px] max-[1040px]:flex max-[1040px]:flex-wrap max-[1040px]:justify-center'>
                {renderProducts()}
                </ul>
            </div>
      </div>
      <Footer/>
    </div>
  )
}

export default SinglePage
