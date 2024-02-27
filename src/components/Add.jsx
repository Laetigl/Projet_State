import React from 'react'

export default function Add(props) {
  return (
    <div className='flex flex-col gap-[30px] md:w-[500px] md:items-center lg:w-[70%] md:gap-[8px] w-[90%]'>
        <div className='flex flex-col justify-center items-start pt-[25px] md:items-center md:pt-[5px]'>
            <h1 className='text-[30px] text-[#02295a] font-bold'>Pick add-ons</h1>
            <p className='lg:text-[15px] md:text-[15px] text-[12px] text-[#9699ab] pb-[20px]'>Add-ons help enhance your gaming experience</p>
        </div> 

        <div className='flex flex-col gap-[15px] md:w-[400px]'>
            <div className={`hover:border-[#bb00ff] w-[100%] h-[70px] border border-[#9699ab] flex lg:gap-[40px] md:gap-[40px] gap-[20px] p-[10px] md:p-[7px] justify-center items-center rounded-xl ${props.addOnline == "online"? "bg-[#d6d9e6] border border-[#bb00ff]":"bg-transparent"}`}>
                <input type="checkbox" className="checkbox md:ms-[14px]" 
                checked={props.addOnline} onClick={() => props.setAddOnline(!props.addOnline)}/>
                <div className=' w-[80%]'>
                    <h1 className='text-[#02295a] font-bold lg:text-[18px] md:text-[18px] text-[15px]'>{props.addOn?"":"Online service"}</h1>
                    <p className='text-[#9699ab] lg:text-[13px] md:text-[13px] text-[10px]'>Acces to multiplayer games</p>
                </div>
                <p className='text-[#741d96] pe-[20px] lg:text-[13px] md:text-[13px] text-[10px]'>+{props.monthlyPrice? "$10/yr": "$1/mo"}</p>
            </div>

            <div className={`hover:border-[#bb00ff] w-[100%] h-[70px] border border-[#9699ab] flex lg:gap-[40px] md:gap-[40px] gap-[20px] p-[10px] md:p-[7px] justify-center items-center rounded-xl ${props.addStorage == "storage"? "bg-[#d6d9e6] border border-[#bb00ff]":"bg-transparent"}`}>
                <input type="checkbox" className="checkbox md:ms-[14px]" checked={props.addStorage} onClick={() => props.setAddStorage(!props.addStorage)}/>
                <div className=' w-[70%]'>
                    <h1 className='text-[#02295a] font-bold lg:text-[18px] md:text-[18px] text-[15px]'>{props.addOn?"":"Larger storage service"}</h1>
                    <p className='text-[#9699ab] lg:text-[13px] md:text-[13px] text-[10px]'>Extra 1TB of cloud save</p>
                </div>
                <p className='text-[#741d96] pe-[20px] lg:text-[13px] md:text-[13px] text-[10px]'>+{props.monthlyPrice? "$20/yr": "$2/mo"}</p>
            </div>

            <div className={`hover:border-[#bb00ff] w-[100%] h-[70px] border border-[#9699ab] flex lg:gap-[40px] md:gap-[40px] gap-[20px] p-[10px] md:p-[7px] justify-center items-center rounded-xl ${props.addCustom == "custom"? "bg-[#d6d9e6] border border-[#bb00ff]":"bg-transparent"}`}>
                <input type="checkbox" className="checkbox md:ms-[14px]" checked={props.addCustom} onClick={() => props.setAddCustom(!props.addCustom)}/>
                <div className=' w-[70%]'>
                    <h1 className='text-[#02295a] font-bold lg:text-[18px] md:text-[18px] text-[15px]'>{props.addOn?"":"Customizable Profile"}</h1>
                    <p className='text-[#9699ab] lg:text-[13px] md:text-[13px] text-[10px]'>Custom theme on your profile</p>
                </div>
                <p className='text-[#741d96] pe-[20px] lg:text-[13px] md:text-[13px] text-[10px]'>+{props.monthlyPrice? "$20/yr": "$2/mo"}</p>
            </div>
        </div>

        <div className='flex lg:gap-[220px] lg:pt-[30px] md:gap-[200px] gap-[100px] pt-[10px] lg:pb-0 md:pb-0 pb-[10px] '>
            <button 
                onClick={() => props.setButtonStep("selectplan")} 
                className='border border-[#02295a] text-[#02295a] w-[100px] p-[10px] rounded-xl'>Go back </button>
            <button          
                onClick={() => props.setButtonStep("sumary")} className='bg-[#02295a] text-white w-[100px] p-[10px] rounded-xl'>Next Step</button>
        </div>
    </div>
  )
}
