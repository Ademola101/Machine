import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {SignMachineProvider} from './machine/SignUpMachine.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SignMachineProvider>
      
    <App />
    </SignMachineProvider>
  </React.StrictMode>,
)
