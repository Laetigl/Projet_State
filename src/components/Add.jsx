import React from 'react'

export default function Add(props) {
  return (
    <div className='w-[500px] flex flex-col gap-[20px] '>
        <div className='flex flex-col justify-center items-start pt-[25px]'>
            <h1 className='text-[30px] text-[#02295a] font-bold'>Pick add-ons</h1>
            <p className='text-[15px] text-[#9699ab] pb-[20px]'>Add-ons help enhance your gaming experience</p>
        </div> 

        <div className='flex flex-col gap-[15px]'>
            <div className={`hover:border-[#bb00ff] w-[100%] h-[80px] border border-[#9699ab] flex gap-[40px] p-[10px] justify-center items-center rounded-xl ${props.addOnline == "online"? "bg-[#d6d9e6] border border-[#bb00ff]":"bg-transparent"}`}>
                <input type="checkbox" className="checkbox" checked={props.addOnline} onClick={() => props.setAddOnline(!props.addOnline)}/>
                <div className=' w-[70%]'>
                    <h1 className='text-[#02295a] font-bold text-[18px]'>{props.addOn?"":"Online service"}</h1>
                    <p className='text-[#9699ab] text-[13px]'>Acces to multiplayer games</p>
                </div>
                <p className='text-[#741d96] pe-[20px]'>+{props.monthlyPrice? "$10/yr": "$1/mo"}</p>
            </div>

            <div className={`hover:border-[#bb00ff] w-[100%] h-[80px] border border-[#9699ab] flex gap-[40px] p-[10px] justify-center items-center rounded-xl ${props.addStorage == "storage"? "bg-[#d6d9e6] border border-[#bb00ff]":"bg-transparent"}`}>
                <input type="checkbox" className="checkbox" checked={props.addStorage} onClick={() => props.setAddStorage(!props.addStorage)}/>
                <div className=' w-[70%]'>
                    <h1 className='text-[#02295a] font-bold text-[18px]'>{props.addOn?"":"Larger storage service"}</h1>
                    <p className='text-[#9699ab] text-[13px]'>Extra 1TB of cloud save</p>
                </div>
                <p className='text-[#741d96] pe-[20px]'>+{props.monthlyPrice? "$20/yr": "$2/mo"}</p>
            </div>

            <div className={`hover:border-[#bb00ff] w-[100%] h-[80px] border border-[#9699ab] flex gap-[40px] p-[10px] justify-center items-center rounded-xl ${props.addCustom == "custom"? "bg-[#d6d9e6] border border-[#bb00ff]":"bg-transparent"}`}>
                <input type="checkbox" className="checkbox" checked={props.addCustom} onClick={() => props.setAddCustom(!props.addCustom)}/>
                <div className=' w-[70%]'>
                    <h1 className='text-[#02295a] font-bold text-[18px]'>{props.addOn?"":"Customizable Profile"}</h1>
                    <p className='text-[#9699ab] text-[13px]'>Custom theme on your profile</p>
                </div>
                <p className='text-[#741d96] pe-[20px]'>+{props.monthlyPrice? "$20/yr": "$2/mo"}</p>
            </div>
        </div>

        <div className='flex gap-[300px] pt-[10px]'>
            <button 
                onClick={() => props.setButtonStep("selectplan")} 
                className='border border-[#02295a] text-[#02295a] w-[100px] p-[10px] rounded-xl'>Go back </button>
            <button          
                onClick={() => props.setButtonStep("sumary")} className='bg-[#02295a] text-white w-[100px] p-[10px] rounded-xl'>Next Step</button>
        </div>
    </div>
  )
}
