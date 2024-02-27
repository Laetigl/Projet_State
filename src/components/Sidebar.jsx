import React from 'react'

export default function Sidebar(props) {
  return (
    <div className='lg:w-[30%] md:w-[100%] md:rounded-xl h-[70%] w-[100%] flex-nowrap md:flex-wrap lg:flex-wrap md:justify-center md:gap-[20px] lg:h-full md:bg-[url(../src/assets/images/bg-sidebar-mobile.svg)] bg-[url(../src/assets/images/bg-sidebar-mobile.svg)] bg-cover lg:bg-contain lg:bg-[url(../src/assets/images/bg-sidebar-desktop.svg)] bg-no-repeat flex lg:flex-col'> 
        <div className='text-white flex gap-[15px] p-[20px] md:w-[40%] lg:w-[70%] md:p-[10px] w-[50%] lg:justify-start md:justify-start justify-center'>
            <p className={`text-[12px] text-center flex items-center justify-center md:w-[30px] md:h-[30px] w-[30px] h-[30px] lg:w-[35px] border border-white rounded-[50%] ${props.buttonStep =="change"? "bg-[#bfe2fd] text-[#02295a] font-bold":""}`}>1</p>
            <div className='lg:flex lg:flex-col md:flex md:flex-col hidden'>
                <p className='text-[10px]'>Step 1</p>
                <h1 className='text-[15px]'>YOUR INFO</h1>
            </div>
        </div>

        <div className='text-white flex gap-[15px] p-[20px] md:w-[40%] lg:w-[70%] md:p-[10px] w-[50%]'>
            <p className={`text-[12px] text-center flex items-center justify-center md:w-[30px] md:h-[30px] w-[30px] h-[30px] lg:w-[35px] border border-white rounded-[50%] ${props.buttonStep =="selectplan"? "bg-[#bfe2fd] text-[#02295a] font-bold":""}`}>2</p>
            <div className='lg:flex lg:flex-col md:flex md:flex-col hidden'>
                <p className='text-[10px]'>Step 2</p>
                <h1 className='text-[15px]'>SELECT PLAN</h1>
            </div>
        </div>

        <div className='text-white flex gap-[15px] p-[20px] md:w-[40%] lg:w-[70%] md:p-[10px] w-[50%]'>
            <p className={`text-[12px] text-center flex items-center justify-center md:w-[30px] md:h-[30px] w-[30px] h-[30px] lg:w-[35px] border border-white rounded-[50%] ${props.buttonStep =="add"? "bg-[#bfe2fd] text-[#02295a] font-bold":""}`}>3</p>
            <div className='lg:flex lg:flex-col md:flex md:flex-col hidden'>
                <p className='text-[10px]'>Step 3</p>
                <h1 className='text-[15px]'>ADD-ONS</h1>
            </div>
        </div>

        <div className='text-white flex gap-[15px] p-[20px] md:w-[40%] lg:w-[70%] md:p-[10px] w-[50%]'>
            <p className={`text-[12px] text-center flex items-center justify-center md:w-[30px] md:h-[30px] w-[30px] h-[30px] lg:w-[35px] border border-white rounded-[50%] ${props.buttonStep =="sumary"? "bg-[#bfe2fd] text-[#02295a] font-bold":""}`}>4</p>
            <div className='lg:flex lg:flex-col md:flex md:flex-col hidden'>
                <p className='text-[10px]'>Step 4</p>
                <h1 className='text-[15px]'>SUMMARY</h1>
            </div>
        </div>
    </div>
  )
}