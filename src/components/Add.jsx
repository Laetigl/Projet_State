import React from 'react'

export default function Add(props) {
  return (
    <div className='w-[500px] flex flex-col gap-[20px] '>
        <div className='flex flex-col justify-center items-start pt-[25px]'>
            <h1 className='text-[30px] text-[#02295a] font-bold'>Pick add-ons</h1>
            <p className='text-[15px] text-[#9699ab] pb-[20px]'>Add-ons help enhance your gaming experience</p>
        </div> 

        <div className='flex flex-col gap-[15px]'>
            <div className='w-[100%] h-[100px] border border-[#9699ab] flex gap-[40px] p-[10px] justify-center items-center rounded-xl'>
                <input type="checkbox" defaultChecked className="checkbox" />
                <div className=' w-[70%]'>
                    <h1 className='text-[#02295a] font-bold text-[18px]'>Online service</h1>
                    <p className='text-[#9699ab] text-[13px]'>Acces to multiplayer games</p>
                </div>
                <p className='text-[#741d96] pe-[20px]'>+$10/yr</p>
            </div>

            <div className='w-[100%] h-[100px] border border-[#9699ab] flex gap-[40px] p-[10px] justify-center items-center rounded-xl'>
                <input type="checkbox" defaultChecked className="checkbox" />
                <div className=' w-[70%]'>
                    <h1 className='text-[#02295a] font-bold text-[18px]'>Larger storage service</h1>
                    <p className='text-[#9699ab] text-[13px]'>Extra 1TB of cloud save</p>
                </div>
                <p className='text-[#741d96] pe-[20px]'>+$20/yr</p>
            </div>

            <div className='w-[100%] h-[100px] border border-[#9699ab] flex gap-[40px] p-[10px] justify-center items-center rounded-xl'>
                <input type="checkbox" defaultChecked className="checkbox" />
                <div className=' w-[70%]'>
                    <h1 className='text-[#02295a] font-bold text-[18px]'>Customizable Profile</h1>
                    <p className='text-[#9699ab] text-[13px]'>Custom theme on your profile</p>
                </div>
                <p className='text-[#741d96] pe-[20px]'>+$20/yr</p>
            </div>
        </div>


        <button onClick={() => props.setButtonStep("selectplan")} className='border border-[#02295a] text-[#02295a] w-[100px] p-[10px] rounded-xl absolute top-[86%] left-[41%]'>
        Go back 
        </button>
        <button onClick={() => props.setButtonStep("sumary")} className='bg-[#02295a] text-white w-[100px] p-[10px] rounded-xl absolute top-[86%] right-[27%]'>
        Next Step
        </button>
    </div>
  )
}
