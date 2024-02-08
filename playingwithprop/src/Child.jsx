import React, { useState } from 'react'

function Child({ receiveName }) {
  const [name, setName] = useState('')

  const handleInputChange = (event) => {
    setName(event.target.value)
  }
  return (
    <div>
      <h1>Child</h1>
      <div>
      <input type="text" onChange={handleInputChange} />
        <button onClick={() => receiveName(name)}>Submit</button>
      </div>
    </div>
  )
}

export default Child