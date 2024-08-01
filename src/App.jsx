import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Router } from 'react-router-dom'
import { Home, Employees } from './components'

function App() {
  return (
    <>
      <div>
          <Router exact path="/" component={Home}></Router>
          <Router exact path="/employees" component={Employees}></Router>
      </div>
    </>
  )
}

export default App
