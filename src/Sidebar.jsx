import React from 'react'

export default function Sidebar() {
  return (
    <div className='w-[30%] h-full bg-[url(../src/assets/images/bg-sidebar-mobile.svg)] bg-contain lg:bg-[url(../src/assets/images/bg-sidebar-desktop.svg)] bg-no-repeat flex flex-col'> 
        <div className='text-white flex gap-[15px] p-[15px]'>
            <p className='text-[10px] text-center flex items-center justify-center w-[35px] border border-white rounded-[50%]'>1</p>
            <div className='flex flex-col'>
                <p className='text-[10px]'>Step 1</p>
                <h1 className='text-[15px]'>YOUR INFO</h1>
            </div>
        </div>

        <div className='text-white flex gap-[15px] p-[15px]'>
            <p className='text-[10px] text-center flex items-center justify-center w-[35px] border border-white rounded-[50%]'>2</p>
            <div className='flex flex-col'>
                <p className='text-[10px]'>Step 2</p>
                <h1 className='text-[15px]'>SELECT PLAN</h1>
            </div>
        </div>

        <div className='text-white flex gap-[15px] p-[15px]'>
            <p className='text-[10px] text-center flex items-center justify-center w-[35px] border border-white rounded-[50%]'>3</p>
            <div className='flex flex-col'>
                <p className='text-[10px]'>Step 3</p>
                <h1 className='text-[15px]'>ADD-ONS</h1>
            </div>
        </div>

        <div className='text-white flex gap-[15px] p-[15px]'>
            <p className='text-[10px] text-center flex items-center justify-center w-[35px] border border-white rounded-[50%]'>4</p>
            <div className='flex flex-col'>
                <p className='text-[10px]'>Step 4</p>
                <h1 className='text-[15px]'>SUMMARY</h1>
            </div>
        </div>
    </div>
  )
}
