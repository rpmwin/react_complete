import React, { useEffect, useState } from 'react'
import Child from './child'

function Parent({newName}) {
  const [name, setName] = useState('')

  useEffect(() => {
    setName(newName)
  },[newName])

  return (
    <div>
      <h1>Parent</h1>
      <h2>{name}</h2>
    </div>
  )
}

export default Parent