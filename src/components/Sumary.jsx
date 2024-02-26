import React from 'react'

export default function Sumary() {
  return (
    <div>Coucou
    <button onClick={() => props.setButtonStep("change")} className='bg-[#02295a] text-white w-[100px] p-[10px] rounded-xl absolute top-[70%] left-[50%px]'>
        Go back 
        </button>
        <button onClick={() => props.setButtonStep("sumary")} className='bg-[#02295a] text-white w-[100px] p-[10px] rounded-xl absolute bottom-[24%] right-[30%]'>
        Next Step
        </button>
    </div>
  )
}
