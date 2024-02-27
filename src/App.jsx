import React,{ useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Personal from './components/Personal'
import SelectPlan from './components/SelectPlan' 
import Add from './components/Add'
import Sumary from './components/Sumary'
import Thanks from './components/Thanks'

function App() {
  const [buttonStep, setButtonStep] = useState("change");
  const [choice, setChoice] = useState(true)
  const [monthlyPrice, setMonthlyPrice] = useState(false)

  const checkhandler =() =>{
      setMonthlyPrice(!monthlyPrice)
  }
  const[selectedPlan, setSelectedPlan] = useState("")
  console.log(selectedPlan);

  const[planPick, setPlanPick] = useState("")
  const[sumaryPlan, setSumaryPlan]=useState("")

  return (
    <div className='lg:w-[900px] lg:h-[550px] bg-white rounded-xl p-[10px] flex gap-[20px] flex-wrap lg:flex-nowrap'>
      <Sidebar buttonStep={buttonStep}></Sidebar>
      {/* Affichage de la 1e page ci-dessous */}
      {buttonStep === "change" && <Personal setButtonStep={setButtonStep}></Personal>}
      {buttonStep === "selectplan" && <SelectPlan setButtonStep={setButtonStep} choice={choice} monthlyPrice={monthlyPrice} setChoice={setChoice} checkhandler={checkhandler} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} setPlanPick={setPlanPick} planPick={planPick}></SelectPlan>}
      {buttonStep === "add" && <Add setButtonStep={setButtonStep} monthlyPrice={monthlyPrice} setChoice={setChoice}checkhandler={checkhandler}></Add>}
      {buttonStep === "sumary" && <Sumary setButtonStep={setButtonStep} planPick={planPick} setPlanPick={setPlanPick} sumaryPlan={sumaryPlan} setSumaryPlan={setSumaryPlan}></Sumary>}
      {buttonStep === "thanks" && <Thanks setButtonStep={setButtonStep}></Thanks>}
    </div>
  )
}
export default App