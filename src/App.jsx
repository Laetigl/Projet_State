import React,{ useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'
import Personal from './components/Personal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[700px] h-[450px] bg-white rounded-xl p-[10px] flex gap-[20px]'>
      <Sidebar></Sidebar>
      <Personal></Personal>
    </div>
  )
}
export default App