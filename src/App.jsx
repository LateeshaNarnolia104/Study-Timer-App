import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'

function App() {

  return (
    <>
      <div className='min-h-screen w-screen bg-cover bg-center flex flex-col items-center justify-center relative'>
        <div className='mb-8'>
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500 drop-shadow-lg bg-white/80 px-8 py-2 rounded-2xl border-4 border-yellow-300 shadow-yellow-200 ">Focus Time!</h1>
        </div>
        <div className='w-full flex justify-center'>
          <Counter ></Counter>
        </div>   
      </div>
      
    </>
  )
}

export default App
