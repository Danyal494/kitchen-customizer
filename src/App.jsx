import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CanvasPage from './components/CanvasPage'
import { Loader } from '@react-three/drei'
import Customizer from './components/Customizer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Customizer/>
      <CanvasPage/>
      <Loader/>
    </>
  )
}

export default App
