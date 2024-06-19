import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import SignUpMachineCContext from './machine/SignUpMachine.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SignUpMachineCContext.Provider>
      
    <App />
    </SignUpMachineCContext.Provider>
  </React.StrictMode>,
)
