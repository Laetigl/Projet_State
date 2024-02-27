import React,{ useState, useEffect } from 'react'
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
  //Partie "plan sélectionné"
  const[selectedPlan, setSelectedPlan] = useState("")
  console.log(selectedPlan);
  const[priceSelected, setPriceSelected] = useState("")

  //UseEffect va permettre de combiner les différents changements selon le plan tarifaire choisi
  useEffect(()=> {
    if(selectedPlan =="arcade")
      setPriceSelected(monthlyPrice?90:9);
    if(selectedPlan =="advanced")
    setPriceSelected(monthlyPrice?120:12);
    if(selectedPlan =="pro")
    setPriceSelected(monthlyPrice?150:15);

  },[selectedPlan, monthlyPrice])
 
  const[planPick, setPlanPick] = useState("")
  const[sumaryPlan, setSumaryPlan]=useState("")

  //Partie Add-ons
  const[selectedAdd,setSelectedAdd] = useState("")
  const[addOn,setAddOn] = useState("")

  const[addOnline, setAddOnline]= useState(false)
  const[addStorage, setAddStorage]= useState(false)
  const[addCustom, setAddCustom]= useState(false)

  const[totalPriceOne, setTotalPriceOne] = useState("")
  const[totalPriceTwo, setTotalPriceTwo] = useState("")
  const[totalPriceThree, setTotalPriceThree] = useState("")


  //UseEffect : pour convertir les strings en nombres au niveau des adds-on
  useEffect(()=> {
    if (addOnline) {
      setTotalPriceOne(monthlyPrice?10:1)
    }
    if (addStorage) {
      setTotalPriceTwo(monthlyPrice?20:2)

    }
    if (addCustom) {
      setTotalPriceThree(monthlyPrice?20:2)

    }
  }, [addOnline,addStorage,addCustom,monthlyPrice])

  return (
    <div className='lg:w-[900px] md:w-[500px] lg:h-[550px] md:pb-[20px] w-[350px] bg-white rounded-xl p-[10px] flex gap-[20px] md:gap-[40px] lg:gap-[5px] flex-wrap lg:flex-nowrap md:items-center md:justify-center items-center justify-center'>
      <Sidebar buttonStep={buttonStep}></Sidebar>
      {/* Affichage de la 1e page ci-dessous */}
      {buttonStep === "change" && <Personal setButtonStep={setButtonStep}></Personal>}

      {buttonStep === "selectplan" && <SelectPlan setButtonStep={setButtonStep} choice={choice} monthlyPrice={monthlyPrice} setChoice={setChoice} checkhandler={checkhandler} selectedPlan={selectedPlan} 
      setSelectedPlan={setSelectedPlan} setPlanPick={setPlanPick} planPick={planPick} setPriceSelected={setPriceSelected}></SelectPlan>}

      {buttonStep === "add" && <Add setButtonStep={setButtonStep} monthlyPrice={monthlyPrice} setChoice={setChoice}checkhandler={checkhandler} selectedAdd={selectedAdd} setSelectedAdd={setSelectedAdd} addOn={addOn} addOnline={addOnline} setAddOnline = {setAddOnline} addStorage={addStorage} setAddStorage={setAddStorage} addCustom={addCustom} setAddCustom={setAddCustom}></Add>}

      {buttonStep === "sumary" && <Sumary setButtonStep={setButtonStep} planPick={planPick} setPlanPick={setPlanPick} sumaryPlan={sumaryPlan} setSumaryPlan={setSumaryPlan} selectedPlan={selectedPlan} monthlyPrice={monthlyPrice} priceSelected={priceSelected} addOn={addOn} addOnline={addOnline} setAddOnline = {setAddOnline} addStorage={addStorage} setAddStorage={setAddStorage} addCustom={addCustom} setAddCustom={setAddCustom} totalPriceOne={totalPriceOne} totalPriceTwo={totalPriceTwo} totalPriceThree={totalPriceThree}></Sumary>}

      {buttonStep === "thanks" && <Thanks setButtonStep={setButtonStep}></Thanks>}
    </div>
  )
}
export default App