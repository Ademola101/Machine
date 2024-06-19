import React from 'react'
import SignUpContext from '../machine/SignUpMachine'

const AccountType = () => {
    const { send } = SignUpContext.useActorRef()
  return (
    <div>
      <h2>Account Type</h2>
      <button onClick={() => send({type: 'SAVE_ACCOUNT_TYPE', params: {accountType: 'personal'}})}>Personal</button>
      <button onClick={() => send({type: 'SAVE_ACCOUNT_TYPE', params: {accountType: 'business'}})}>Business</button>

      <button onClick={() => send({type: 'ON_NEXT'})}>Next</button>
      <button onClick={() => send({type: 'ON_BACK'})}>Back</button>
    </div>
  )
}

export default AccountType