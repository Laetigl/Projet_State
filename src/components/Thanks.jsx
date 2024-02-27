import React from 'react'
import thanks from "../assets/images/icon-thank-you.svg"

export default function Thanks(props) {
  return (
    <div className='w-[500px] flex flex-col gap-[20px] justify-center items-center md:w-[500px] md:items-center'>
        <div className='flex flex-col justify-center items-center text-center pt-[25px] gap-[20px] md:items-center md:h-[340px]'>
            <img className='lg:pt-0 md:pt-0 pt-[50px]' src={thanks} alt="" />
            <h1 className='text-[40px] text-[#02295a] font-bold'>Thank you !</h1>
            <p className='lg:text-[17px] md:text-[17px] text-[15px] text-[#9699ab] pb-[20px]'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
        </div> 
        <div className='flex gap-[300px] pt-[30px] md:gap-[200px] lg:pb-0 md:pb-0 pb-[10px] '>
            <button 
                onClick={() => props.setButtonStep("change")} 
                className='border border-[#02295a] text-[#02295a] w-[100px] p-[10px] rounded-xl'>Go back </button>                
        </div>
    </div>
  )
}
