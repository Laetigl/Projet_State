import React, { useEffect, useState} from 'react'
import arcade from "../assets/images/icon-arcade.svg"
import advanced from "../assets/images/icon-advanced.svg"
import pro from "../assets/images/icon-pro.svg"

export default function SelectPlan(props) {
  return (
    <div className='flex flex-col lg:gap-[20px] gap-[50px]  md:items-center md:gap-[12px] lg:w-[65%] w-[90%]'>
        <div className='w-[100%] flex flex-col justify-center items-center md:items-center pt-[25px] md:w-[500px] md:pt-[5px] text-center'>
            <h1 className='text-[30px] text-[#02295a] font-bold'>Select your plan</h1>
            <p className='lg:text-[15px] md:text-[15px] text-[12px] text-[#9699ab] lg:pb-[20px] md:pb-[20px]'>You have the option of monthly or early billing</p>
        </div>

        <div className='flex gap-[10px] md:w-[400px]'>
            <button className={`flex flex-col justify-center gap-[30px] p-[10px] w-[170px] lg:h-[180px] md:h-[180px] h-[130px] border border-black rounded-xl cursor-pointer hover:border-[#bb00ff] ${props.selectedPlan == "arcade"? "bg-[#d6d9e6] border border-[#bb00ff]":"bg-transparent"}`} onClick={() => props.setSelectedPlan("arcade")}>
                <img className="w-[40px]" src={arcade} alt=""/>
                <div className='flex flex-col'>
                    <h1 className='text-[#02295a] font-bold lg:text-[18px] md:text-[18px] text-[13px]'>{props.planPick?"":"Arcade"}</h1>
                    <p className='text-[#9699ab] text-[12px]'>{props.monthlyPrice? "$90/yr": "$9/mo"}</p>
                </div>
            </button>

            <button className={`flex flex-col justify-center gap-[30px] p-[10px] w-[170px] lg:h-[180px] md:h-[180px] h-[130px] border border-black rounded-xl cursor-pointer hover:border-[#bb00ff] ${props.selectedPlan == "advanced"? "bg-[#d6d9e6] border border-[#bb00ff]":"bg-transparent"}`} onClick={() => props.setSelectedPlan("advanced")}>
                <img className="w-[40px]" src={advanced} alt="" />
                <div className='flex flex-col'>
                    <h1 className='text-[#02295a] font-bold lg:text-[18px] md:text-[18px] text-[13px]'>{props.planPick?"":"Advanced"}</h1>
                    <p className='text-[#9699ab] text-[12px]'>{props.monthlyPrice? "$120/yr": "$12/mo"}</p>
                </div>
            </button>
            <button className={`flex flex-col justify-center gap-[30px] p-[10px] w-[170px] lg:h-[180px] md:h-[180px] h-[130px] border border-black rounded-xl cursor-pointer hover:border-[#bb00ff] ${props.selectedPlan == "pro"? "bg-[#d6d9e6] border border-[#bb00ff]":"bg-transparent"}`} onClick={() => props.setSelectedPlan("pro")}>
                <img className="w-[40px]" src={pro} alt="" />
                <div className='flex flex-col'>
                    <h1 className='text-[#02295a] font-bold lg:text-[18px] md:text-[18px] text-[13px]'>{props.planPick?"":"Pro"}</h1>
                    <p className='text-[#9699ab] text-[12px]'>{props.monthlyPrice? "$150/yr": "$15/mo"}</p>
                </div>
            </button>
        </div>
        <div className='flex w-[100%] md:w-[400px] h-[50px] bg-[#f0f6ff] justify-center items-center gap-[70px]'>
            <p className={`ps-[7px] text-[13px] ${props.monthlyPrice?"text-[#9699ab]":""}`}>Monthly</p>
            <input type="checkbox" id ="checkbox" className="toggle bg-slate-600" checked={props.monthlyPrice} onChange={props.checkhandler}/>
            <p className={`ps-[7px] text-[13px] ${props.monthlyPrice?"":"text-[#9699ab]"}`}>Yearly</p>
        </div>

        <div className='flex lg:gap-[220px] lg:pt-[30px] md:gap-[200px] gap-[100px] justify-center lg:pb-0 md:pb-0 pb-[10px] '>
            <button 
                onClick={() => props.setButtonStep("change")} 
                className='border border-[#02295a] text-[#02295a] lg:w-[100px] w-[100px] p-[10px] rounded-xl'>Go back </button>
            <button          
                // Condition : avec la propriété "disabled" on désactive le button si le choix de plan tarifaire sélectionné est vide (pas de plan choisi). Dès qu'un choix est sélectionné on peut passer à l'étape suivante 
                disabled={props.selectedPlan == ""}
                onClick={() => props.setButtonStep("add")} className='bg-[#02295a] text-white lg:w-[100px] w-[100px] p-[10px] rounded-xl'>Next Step</button>
        </div>
    </div>
  )
}