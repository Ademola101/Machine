import React from 'react'
import { useSelector, useActorRef } from '../machine/SignUpMachine'


const BusinnessName = () => {
    const { send } = useActorRef()
    const state = useSelector((state) => state)
  return (
    <div>
      <h2>Business Name</h2>
      <input
        type="text"
        placeholder="Business Name"
        value={state.context.businessName}
        onChange={(e) => send({type: 'SAVE_BUSINESS_NAME', params: {businessName: e.target.value}})}
      />
    </div>
  )
}

export default BusinnessName