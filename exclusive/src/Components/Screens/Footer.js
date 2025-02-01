import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
        <footer className='bg-[#000] pb-[16px]'>
            <div className='mx-auto w-[90%] pt-[80px] pb-[60px] text-[#fff] flex justify-between  max-[1100px]:flex-col max-[1100px]:gap-y-[40px] max-[1100px]:items-center'>
                <div className='flex flex-col gap-[14px]'>
                    <div className='flex flex-col gap-[24px] max-[1100px]:items-center'>
                        <h1 className='text-[#fafafa] font-interBold text-[24px]'><Link to={'/'}>Exclusive</Link></h1>
                        <div className='font-poppinMed text-[20px] text-[#fafafa]'><Link to={'/'}>Subscribe</Link></div>
                        <div className='font-poppinReg text-[16px] text-[#fafafa]'>Get 10% off your first order</div>
                    </div>
                    <div className='flex items-center relative'>
                        <input type="email" placeholder="Enter your email" className='bg-[#000] border-[1.5px] rounded-[4px] py-[10px] pl-[16px] font-poppinReg text-[16px] text-[#fafafa]'/>
                        <Link to={'/'} className='absolute right-[12px]'>
                            <div >
                                <img src="../Assets/send.svg" alt="send.svg"/>
                            </div>
                        </Link>
                    </div>
                </div>
                <ul className=' flex flex-col gap-[24px] max-[1100px]:items-center'>
                    <li className='font-poppinMed text-[20px] text-[#fafafa]'>Support</li>
                    <div className=' flex flex-col gap-[16px] max-[1100px]:items-center'>
                        <li className='font-poppinReg text-[16px] text-[#fafafa]'><Link to={'/'}>111 Bijoy sarani, Dhaka,<br/> DH 1515, Bangladesh.</Link></li>
                        <li className='font-poppinReg text-[16px] text-[#fafafa]'><Link to={'/'}>exclusive@gmail.com</Link></li>
                        <li className='font-poppinReg text-[16px] text-[#fafafa]'><Link to={'/'}>+88015-88888-9999</Link></li>
                    </div>
                </ul>
                <ul className=' flex flex-col gap-[24px] max-[1100px]:items-center'>
                    <li className='font-poppinMed text-[20px] text-[#fafafa]'>Account</li>
                    <div className=' flex flex-col gap-[16px] max-[1100px]:items-center'>
                        <li className='font-poppinReg text-[16px] text-[#fafafa]'><Link to={'/'}>My Account</Link></li>
                        <li className='font-poppinReg text-[16px] text-[#fafafa]'><Link to={'/'}>Login / Register</Link></li>
                        <li className='font-poppinReg text-[16px] text-[#fafafa]'><Link to={'/'}>Cart</Link></li>
                        <li className='font-poppinReg text-[16px] text-[#fafafa]'><Link to={'/'}>Wishlist</Link></li>
                        <li className='font-poppinReg text-[16px] text-[#fafafa]'><Link to={'/'}>Shop</Link></li>
                    </div>
                </ul>
                <ul className=' flex flex-col gap-[24px] max-[1100px]:items-center'>
                    <li className='font-poppinMed text-[20px] text-[#fafafa]'>Quick Link</li>
                    <div className=' flex flex-col gap-[16px] max-[1100px]:items-center'>
                        <li className='font-poppinReg text-[16px] text-[#fafafa]'><Link to={'/'}>Privacy Policy</Link></li>
                        <li className='font-poppinReg text-[16px] text-[#fafafa]'><Link to={'/'}>Terms Of Use</Link></li>
                        <li className='font-poppinReg text-[16px] text-[#fafafa]'><Link to={'/'}>FAQ</Link></li>
                        <li className='font-poppinReg text-[16px] text-[#fafafa]'><Link to={'/'}>Contact</Link></li>
                    </div>
                </ul>
                <ul className=' flex flex-col gap-[24px] max-[1100px]:items-center'>
                    <li className='font-poppinMed text-[20px] text-[#fafafa]'>Download App</li>
                    <div className='flex flex-col gap-[24px] max-[1100px]:items-center'>
                        <div className='flex flex-col gap-[8px]'>
                            <li className='font-poppinMed text-[12px] text-[#fafafa] opacity-[70%]'><Link to={'/'}>Save $3 with App New User Only</Link></li>
                            <li className='flex items-center gap-[8px]'>
                                <picture>
                                    <img src="../Assets/Qrcode 1.png" alt="Qrcode.png"/>
                                </picture>
                                <Link to={'/'}><img src="../Assets/play-app-store.png" alt="App.png" class="app"/></Link></li>
                        </div>
                        <li>
                            <Link to={'/'}>
                                <img src="../Assets/social-media.png" alt="social-media.png"/>
                            </Link>
                        </li>
                    </div>
                </ul>
            </div>
            <div className='border-t-[1px] border-[rgba(255,255,255,.3)] opacity-[30%] pt-[16px] font-poppinReg text-[16px] text-center text-[rgba(255,255,255,1)] '>
                © Copyright Rimel 2024. All right reserved
            </div>
        </footer>
    </div>
  )
}

export default Footer
