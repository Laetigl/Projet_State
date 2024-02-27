import React from 'react'

export default function Sumary(props) {
  return (
  <div className='w-[500px] lg:w-[70% flex flex-col gap-[20px] md:w-[500px] md:items-center lg:w-[70%]'>
        <div className='flex flex-col justify-center items-center pt-[25px] md:items-center text-center'>
            <h1 className='text-[30px] text-[#02295a] font-bold'>Finishing up</h1>
            <p className='lg:text-[15px] md:text-[15px] text-[12px] text-[#9699ab] pb-[20px]'>Double-check everything looks OK before confirming</p>
        </div> 

        <div className='bg-[#f0f6ff] w-[100%] h-[200px] p-[20px] gap-[50px] md:w-[400px] md:h-[170px]'>
          <div className='flex'>
            <div className='flex flex-col w-[90%] items-start'>
              <h1 className='font-bold'>{props.selectedPlan.charAt(0).toUpperCase() + props.selectedPlan.slice(1)} ({props.monthlyPrice? "yearly": "monthly"})
              </h1>
              <button className='text-[#9699ab] text-[12px] pb-[10px] underline' onClick={() => props.setButtonStep("selectplan")}>Change</button>
            </div> 
            <p className='w-[5%]'>${props.priceSelected}</p>
          </div>

            <hr />
            
          <div className='flex flex-col gap-[10px] pt-[20px] md:pt-[10px]'>
            <div className='flex'>
              <p className='text-[#9699ab] text-[12px] w-[90%]'>{props.addOnline?"Online service":""}</p>
              {props.addOnline?
                <p className='w-[5%]'>{props.monthlyPrice? "$10/yr": "$1/mo"}</p>
                :null
              }
            </div> 

            <div className='flex'>
              <p className='text-[#9699ab] text-[12px] w-[90%]'>{props.addStorage?"Larger Storage":""}</p>
              {props.addStorage?
                <p className='w-[5%]'>{props.monthlyPrice? "$20/yr": "$2/mo"}</p>
                :null
              }
            </div> 

            <div className='flex'>
              <p className='text-[#9699ab] text-[12px] w-[90%]'>{props.addCustom?"Customizable Profile":""}</p>
              {props.addCustom?
                <p className='w-[5%]'>{props.monthlyPrice? "$20/yr": "$2/mo"}</p>
                :null
              }
            </div> 
          </div>

        </div>
        <div className='flex lg:gap-[40px] md:gap-[40px] gap-[90px] w-[100%] text-[#9699ab] md:w-[400px] lg:justify-start md:justify-start justify-center'>
          <h1 className='lg:w-[80%] md:w-[80%] w-[40%]'>Total (per year)</h1>
          <p className='w-[20%] justify-center items-center text-center font-bold text-[#473dff]'>${props.priceSelected + props.totalPriceOne+props.totalPriceTwo+props.totalPriceThree}/yr</p>
        </div>

        <div className='flex lg:gap-[220px] lg:pt-[30px] md:gap-[200px] gap-[100px] md:pt-0 pt-[24px] lg:pb-0 md:pb-0 pb-[10px] justify-center'>
            <button onClick={() => props.setButtonStep("add")} className='border border-[#02295a] text-[#02295a] w-[100px] p-[10px] rounded-xl'>Go back </button>
            <button onClick={() => props.setButtonStep("thanks")} className='bg-[#02295a] text-white w-[100px] p-[10px] rounded-xl'>Next Step</button>
        </div>
    </div>
  )
}