import React,{ useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Personal from './components/Personal'
import SelectPlan from './components/SelectPlan' 
import Add from './components/Add'
import Sumary from './components/Sumary'

function App() {
  const [buttonStep, setButtonStep] = useState("change");

  return (
    <div className='w-[900px] h-[550px] bg-white rounded-xl p-[10px] flex gap-[20px]'>
      <Sidebar buttonStep={buttonStep}></Sidebar>
      {/* Affichage de la 1e page ci-dessous */}
      {buttonStep === "change" && <Personal setButtonStep={setButtonStep}></Personal>}
      {buttonStep === "selectplan" && <SelectPlan setButtonStep={setButtonStep}></SelectPlan>}
      {buttonStep === "add" && <Add setButtonStep={setButtonStep}></Add>}
      {buttonStep === "sumary" && <Sumary setButtonStep={setButtonStep}></Sumary>}
    </div>
  )
}
export default App