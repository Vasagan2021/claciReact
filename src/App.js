import React, { useState } from 'react'
import Calculator from './Calculator'

function App () {

  const [value, setValue] = useState('')
  
  return (
    <div>
         <Calculator 
           value= {value}
           setValue= {setValue}
         />
    </div>
  )
}

export default App