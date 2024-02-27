import React from 'react'
import thanks from "../assets/images/icon-thank-you.svg"

export default function Thanks() {
  return (
    <div className='w-[500px] flex flex-col gap-[20px] justify-center items-center'>
        <div className='flex flex-col justify-center items-center text-center pt-[25px] gap-[20px]'>
            <img src={thanks} alt="" />
            <h1 className='text-[40px] text-[#02295a] font-bold'>Thank you !</h1>
            <p className='text-[17px] text-[#9699ab] pb-[20px]'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
        </div> 
    </div>
  )
}
