import React, { useState} from 'react'
import arcade from "../assets/images/icon-arcade.svg"
import advanced from "../assets/images/icon-advanced.svg"
import pro from "../assets/images/icon-pro.svg"

export default function SelectPlan(props) {
    const[choice, setChoice] = useState(true)
    const [isChecked, setIsChecked] = useState(false)

    const checkhandler =() =>{
        setIsChecked(!isChecked)
    }
    // const[colorOne,setColorOne] = useState(false)
    // useEffect(()=>{
    //     const toggle =()=> setColorOne((prev) => !prev)
    //     document.getElementById("selectPlan").addEventListener('click',toggle)
    //     return()=>
    //     document.getElementById("selectPlan").removeEventListener('click', toggle)
    // })

  return (
    <div className='flex flex-col gap-[20px] '>
        <div className='w-[100%] flex flex-col justify-center items-start pt-[25px]'>
            <h1 className='text-[30px] text-[#02295a] font-bold'>Select your plan</h1>
            <p className='text-[15px] text-[#9699ab] pb-[20px]'>You have the option of monthly or early billing</p>
        </div>

        <div className='flex gap-[10px]'>
            <div className={`flex flex-col justify-center gap-[30px] p-[10px] w-[150px] h-[180px] border border-black rounded-xl cursor-pointer`} onClick={() => setChoice(`${choice? "bg-[#d6d9e6] border border-[#741d96]" : "bg-transparent"}`)}>
                <img className="w-[40px]" src={arcade} alt="" />
                <div className='flex flex-col'>
                    <h1 className='text-[#02295a] font-bold text-[18px]'>Arcade</h1>
                    <p className='text-[#9699ab] text-[12px]'>$9/mo</p>
                </div>
            </div>

            <div className={`flex flex-col justify-center gap-[30px] p-[10px] w-[150px] h-[180px] border border-black rounded-xl cursor-pointer ${choice == 2? "bg-[#d6d9e6] border border-[#741d96]" : ""}`}>
                <img className="w-[40px]" src={advanced} alt="" />
                <div className='flex flex-col'>
                    <h1 className='text-[#02295a] font-bold text-[18px]'>Advanced</h1>
                    <p className='text-[#9699ab] text-[12px]'>$12/mo</p>
                </div>
            </div>
            <div className={`flex flex-col justify-center gap-[30px] p-[10px] w-[150px] h-[180px] border border-black rounded-xl cursor-pointer ${choice == 3? "bg-[#d6d9e6] border border-[#741d96]" : ""}`}>
                <img className="w-[40px]" src={pro} alt="" />
                <div className='flex flex-col'>
                    <h1 className='text-[#02295a] font-bold text-[18px]'>Pro</h1>
                    <p className='text-[#9699ab] text-[12px]'>$15/mo</p>
                </div>
            </div>
        </div>
        <div className='flex w-[100%] h-[50px] bg-[#f0f6ff] justify-center items-center gap-[70px]'>
            <p className={`${isChecked?"text-[#9699ab]":""}`}>Monthly</p>
            <input type="checkbox" id ="checkbox" className="toggle bg-slate-600" checked={isChecked} onChange={checkhandler}/>
            <p className={`${isChecked?"":"text-[#9699ab]"}`}>Yearly</p>
        </div>
        <button onClick={() => props.setButtonStep("change")} className='border border-[#02295a] text-[#02295a] w-[100px] p-[10px] rounded-xl absolute top-[86%] left-[41%]'>
        Go back 
        </button>
        <button onClick={() => props.setButtonStep("add")} className='bg-[#02295a] text-white w-[100px] p-[10px] rounded-xl absolute top-[86%] right-[27%]'>
        Next Step
        </button>
    </div>
  )
}
