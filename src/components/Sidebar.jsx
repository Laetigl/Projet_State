import React from 'react'

export default function Sidebar(props) {
  return (
    <div className='lg:w-[35%] h-[70%] w-[90%] flex-wrap lg:h-full bg-[url(../src/assets/images/bg-sidebar-mobile.svg)] bg-contain lg:bg-[url(../src/assets/images/bg-sidebar-desktop.svg)] bg-no-repeat flex lg:flex-col'> 
        <div className='text-white flex gap-[15px] p-[20px]'>
            <p className={`text-[12px] text-center flex items-center justify-center  w-[20px] lg:w-[35px] border border-white rounded-[50%] ${props.buttonStep =="change"? "bg-[#bfe2fd] text-[#02295a] font-bold":""}`}>1</p>
            <div className='flex flex-col'>
                <p className='text-[10px]'>Step 1</p>
                <h1 className='text-[15px]'>YOUR INFO</h1>
            </div>
        </div>

        <div className='text-white flex gap-[15px] p-[20px]'>
            <p className={`text-[12px] text-center flex items-center justify-center w-[20px] lg:w-[35px] border border-white rounded-[50%] ${props.buttonStep =="selectplan"? "bg-[#bfe2fd] text-[#02295a] font-bold":""}`}>2</p>
            <div className='flex flex-col'>
                <p className='text-[10px]'>Step 2</p>
                <h1 className='text-[15px]'>SELECT PLAN</h1>
            </div>
        </div>

        <div className='text-white flex gap-[15px] p-[20px]'>
            <p className={`text-[12px] text-center flex items-center justify-center w-[20px] lg:w-[35px] border border-white rounded-[50%] ${props.buttonStep =="add"? "bg-[#bfe2fd] text-[#02295a] font-bold":""}`}>3</p>
            <div className='flex flex-col'>
                <p className='text-[10px]'>Step 3</p>
                <h1 className='text-[15px]'>ADD-ONS</h1>
            </div>
        </div>

        <div className='text-white flex gap-[15px] p-[20px]'>
            <p className={`text-[12px] text-center flex items-center justify-center w-[20px] lg:w-[35px] border border-white rounded-[50%] ${props.buttonStep =="sumary"? "bg-[#bfe2fd] text-[#02295a] font-bold":""}`}>4</p>
            <div className='flex flex-col'>
                <p className='text-[10px]'>Step 4</p>
                <h1 className='text-[15px]'>SUMMARY</h1>
            </div>
        </div>
    </div>
  )
}