import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navabar from './component/Navbar'
import MainHero from './component/MainHero'
import Card from './component/Card'
import MainHero2 from './component/MainHero2'

function App() {
 

  return (
    <>
    <Navabar/>
    <MainHero/>
    <Card/>
    <MainHero2/>
    </>
  )
}

export default App
