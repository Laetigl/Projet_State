import React from 'react'

export default function Sumary(props) {
  return (
  <div className='w-[500px] flex flex-col gap-[20px]'>
        <div className='flex flex-col justify-center items-start pt-[25px]'>
            <h1 className='text-[30px] text-[#02295a] font-bold'>Finishing up</h1>
            <p className='text-[15px] text-[#9699ab] pb-[20px]'>Double-check everything looks OK before confirming</p>
        </div> 

        <div className='bg-[#f0f6ff] w-[100%] h-[200px] p-[20px] gap-[50px]' >
          <div className='flex'>
            <div className='flex flex-col w-[80%] items-start'>
              <h1 className='font-bold'>{props.selectedPlan}</h1>
              <button className='text-[#9699ab] text-[12px] pb-[10px] underline' onClick={() => props.setButtonStep("selectplan")}>Change</button>
            </div> 
            <p className='w-[20%]'>$90/yr</p>
          </div>

            <hr />
            
          <div className='flex flex-col gap-[10px] pt-[20px]'>
            <div className='flex'>
              <p className='text-[#9699ab] text-[12px] w-[80%]'>Online service</p>
              <p className='w-[20%]'>$10/yr</p>
            </div> 

            <div className='flex'>
              <p className='text-[#9699ab] text-[12px] w-[80%]'>Customizable profile</p>
              <p className='w-[20%]'>$20/yr</p>
            </div> 
          </div>

        </div>
        <div className='flex gap-[40px] w-[100%] text-[#9699ab]'>
          <h1 className='w-[80%]'>Total (per year)</h1>
          <p className='w-[20%] justify-center items-center text-center font-bold text-[#473dff]'>{}/yr</p>
        </div>

        <div className='flex gap-[300px] pt-[30px]'>
            <button onClick={() => props.setButtonStep("add")} className='border border-[#02295a] text-[#02295a] w-[100px] p-[10px] rounded-xl'>Go back </button>
            <button onClick={() => props.setButtonStep("thanks")} className='bg-[#02295a] text-white w-[100px] p-[10px] rounded-xl'>Next Step</button>
        </div>
    </div>
  )
}
