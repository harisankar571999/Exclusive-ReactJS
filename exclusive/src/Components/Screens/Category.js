
import React, { useState } from 'react'
import Categories from "../JSON/Categories.json"
import Products from './Products'


function Category() {
    const renderItems = () => (
        Categories.map(item => {
            return (
                <li key={item.id} className='w-[100%] h-[145px] border-[1px] border-[rgba(0,0,0,0.3)] border-solid rounded-[4px] flex items-center justify-center'>
                    <div className='flex flex-col items-center gap-[16px]'>
                        <div>
                            <img src={item.img} alt={`${item.category}.svg`} />
                        </div>
                        <div>{item.category}</div>
                    </div>
                </li>)
        })
    )
    return (
        <div>
            <div className='mx-auto w-[90%] mt-[54px]'>
                <div className='flex items-center  gap-[16px]'>
                    <div className='w-[20px] h-[40px] rounded-[4px] bg-[#DB4444]'></div>
                    <h3 className='font-poppinSemi text-[16px] text-[#DB4444]'>Catogories</h3>
                </div>
                <div className='font-interSemi text-[36px] mt-[28px]'>Browse By Category</div>
                <div className='mt-[28px]'>
                    <ul className='flex gap-x-[30px]'>
                        {renderItems()}
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Category

// border: 1px solid #0000004D