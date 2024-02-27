import React, { useState} from 'react'
import arcade from "../assets/images/icon-arcade.svg"
import advanced from "../assets/images/icon-advanced.svg"
import pro from "../assets/images/icon-pro.svg"

export default function SelectPlan(props) {
  return (
    <div className='flex flex-col gap-[20px] '>
        <div className='w-[100%] flex flex-col justify-center items-start pt-[25px]'>
            <h1 className='text-[30px] text-[#02295a] font-bold'>Select your plan</h1>
            <p className='text-[15px] text-[#9699ab] pb-[20px]'>You have the option of monthly or early billing</p>
        </div>

        <div className='flex gap-[10px]'>
            <button className={`flex flex-col justify-center gap-[30px] p-[10px] w-[170px] h-[180px] border border-black rounded-xl cursor-pointer ${props.selectedPlan == "arcade"? "bg-[#d6d9e6] border border-[#bb00ff]":"bg-transparent"}`} onClick={() => props.setSelectedPlan("arcade")}>
                <img className="w-[40px]" src={arcade} alt=""/>
                <div className='flex flex-col'>
                    <h1 className='text-[#02295a] font-bold text-[18px]'>{props.planPick?"":"Arcade"}</h1>
                    <p className='text-[#9699ab] text-[12px]'>{props.monthlyPrice? "$90/yr": "$9/mo"}</p>
                </div>
            </button>

            <button className={`flex flex-col justify-center gap-[30px] p-[10px] w-[170px] h-[180px] border border-black rounded-xl cursor-pointer ${props.selectedPlan == "advanced"? "bg-[#d6d9e6] border border-[#bb00ff]":"bg-transparent"}`} onClick={() => props.setSelectedPlan("advanced")}>
                <img className="w-[40px]" src={advanced} alt="" />
                <div className='flex flex-col'>
                    <h1 className='text-[#02295a] font-bold text-[18px]'>{props.planPick?"":"Advanced"}</h1>
                    <p className='text-[#9699ab] text-[12px]'>{props.monthlyPrice? "$120/yr": "$12/mo"}</p>
                </div>
            </button>
            <button className={`flex flex-col justify-center gap-[30px] p-[10px] w-[170px] h-[180px] border border-black rounded-xl cursor-pointer ${props.selectedPlan == "pro"? "bg-[#d6d9e6] border border-[#bb00ff]":"bg-transparent"}`} onClick={() => props.setSelectedPlan("pro")}>
                <img className="w-[40px]" src={pro} alt="" />
                <div className='flex flex-col'>
                    <h1 className='text-[#02295a] font-bold text-[18px]'>{props.planPick?"":"Pro"}</h1>
                    <p className='text-[#9699ab] text-[12px]'>{props.monthlyPrice? "$150/yr": "$15/mo"}</p>
                </div>
            </button>
        </div>
        <div className='flex w-[100%] h-[50px] bg-[#f0f6ff] justify-center items-center gap-[70px]'>
            <p className={`${props.monthlyPrice?"text-[#9699ab]":""}`}>Monthly</p>
            <input type="checkbox" id ="checkbox" className="toggle bg-slate-600" checked={props.monthlyPrice} onChange={props.checkhandler}/>
            <p className={`${props.monthlyPrice?"":"text-[#9699ab]"}`}>Yearly</p>
        </div>
        <div className='flex gap-[300px] pt-[30px]'>
            <button onClick={() => props.setButtonStep("change")} className='border border-[#02295a] text-[#02295a] w-[100px] p-[10px] rounded-xl'>Go back </button>
            <button onClick={() => props.setButtonStep("add")} className='bg-[#02295a] text-white w-[100px] p-[10px] rounded-xl'>Next Step</button>
        </div>
    </div>
  )
}