import React from 'react'

export default function Sumary(props) {
  return (
  <div className='w-[500px] flex flex-col gap-[20px] md:w-[500px] md:items-center'>
        <div className='flex flex-col justify-center items-start pt-[25px]'>
            <h1 className='text-[30px] text-[#02295a] font-bold'>Finishing up</h1>
            <p className='text-[15px] text-[#9699ab] pb-[20px]'>Double-check everything looks OK before confirming</p>
        </div> 

        <div className='bg-[#f0f6ff] w-[100%] h-[200px] p-[20px] gap-[50px] md:w-[400px]'>
          <div className='flex'>
            <div className='flex flex-col w-[90%] items-start'>
              <h1 className='font-bold'>{props.selectedPlan.charAt(0).toUpperCase() + props.selectedPlan.slice(1)} ({props.monthlyPrice? "yearly": "monthly"})
              </h1>
              <button className='text-[#9699ab] text-[12px] pb-[10px] underline' onClick={() => props.setButtonStep("selectplan")}>Change</button>
            </div> 
            <p className='w-[5%]'>${props.priceSelected}</p>
          </div>

            <hr />
            
          <div className='flex flex-col gap-[10px] pt-[20px]'>
            <div className='flex'>
              <p className='text-[#9699ab] text-[12px] w-[90%]'>{props.addOnline?"Online":""}</p>
              {props.addOnline?
                <p className='w-[5%]'>{props.monthlyPrice? "$10/yr": "$1/mo"}</p>
                :null
              }
            </div> 

            <div className='flex'>
              <p className='text-[#9699ab] text-[12px] w-[90%]'>{props.addStorage?"Storage":""}</p>
              {props.addStorage?
                <p className='w-[5%]'>{props.monthlyPrice? "$20/yr": "$2/mo"}</p>
                :null
              }
            </div> 

            <div className='flex'>
              <p className='text-[#9699ab] text-[12px] w-[90%]'>{props.addCustom?"Custom":""}</p>
              {props.addCustom?
                <p className='w-[5%]'>{props.monthlyPrice? "$20/yr": "$2/mo"}</p>
                :null
              }
            </div> 
          </div>

        </div>
        <div className='flex gap-[40px] w-[100%] text-[#9699ab] md:w-[400px]'>
          <h1 className='w-[80%]'>Total (per year)</h1>
          <p className='w-[20%] justify-center items-center text-center font-bold text-[#473dff]'>${props.priceSelected + props.totalPriceOne+props.totalPriceTwo+props.totalPriceThree}/yr</p>
        </div>

        <div className='flex gap-[300px] pt-[30px]'>
            <button onClick={() => props.setButtonStep("add")} className='border border-[#02295a] text-[#02295a] w-[100px] p-[10px] rounded-xl'>Go back </button>
            <button onClick={() => props.setButtonStep("thanks")} className='bg-[#02295a] text-white w-[100px] p-[10px] rounded-xl'>Next Step</button>
        </div>
    </div>
  )
}