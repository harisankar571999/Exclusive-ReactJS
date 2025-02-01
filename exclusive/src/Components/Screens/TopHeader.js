import React,{useState} from 'react'
import {Link} from 'react-router-dom'
function TopHeader() {
   
    const [show,setShow] = useState(false)

    const  handleClick = () => (
        setShow(!show) 
    )
    const [language,setLanguage]=useState("English")
 
     const handleLanguage=(e)=>{
        setLanguage(e.target.innerText)
        setShow(false) 
    }
  return (
    <>
        <div className='bg-black relative max-[720px]:py-[15px]'>
            <div className='px-10'>
                <div className='pr-10 max-[900px]:pr-0 max-[700px]:pr-[10px] text-center'>
                    <div className='flex items-center max-[724px]:flex-col max-[650px]:gap-[10px] '>
                        <div className='mx-auto text-white p-2 font-poppinReg text-sm  text-center'> 
                            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link><b className='text-white underline font-poppinReg text-sm' >ShopNow</b></Link>
                        </div>
                        <div className='flex items-center flex-col relative' >
                            <div className='flex justify-end items-center gap-x-2 cursor-pointer ' onClick={handleClick}>
                                <span className='text-white font-poppinReg text-sm '>{language}</span>
                                <span className={`transition-all duration-500 ease-in-out ${show ? 'rotate-180' : '' }`} >
                                    <img alt="short-arrow-down.svg" src={require("../Assets/short-arrow-down.svg").default}/>
                                </span> 
                            </div>
                            <div className={`absolute top-[30px] z-30 transition-all duration-500 ease-in-out ${show ? 'h-[100%]' : 'h-0 overflow-hidden'}`} onClick={handleClick}>
                                <ul className='flex flex-col  bg-black opacity-90 rounded'>
                                    <li className='text-white py-1 px-2 cursor-pointer hover:border-[.5px] ' onClick={handleLanguage}>English</li>
                                    <li className='text-white py-1 px-2 cursor-pointer hover:border-[.5px] ' onClick={handleLanguage}>Malayalam</li>
                                    <li className='text-white py-1 px-2 cursor-pointer hover:border-[.5px] ' onClick={handleLanguage}>Tamil</li>
                                    <li className='text-white py-1 px-2 cursor-pointer hover:border-[.5px] ' onClick={handleLanguage}>Hindi</li>
                                    <li className='text-white py-1 px-2 cursor-pointer hover:border-[.5px] ' onClick={handleLanguage}>Kannada</li>
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
