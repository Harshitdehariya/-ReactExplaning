import { useState } from "react"



function App() {
 
  let [Counter,setCounter] = useState(0)
  

  let AddValue = () => {
    
    setCounter(Counter + 1)

  }

  let RemoveValue = () => {
    setCounter(Counter - 1)
  }

  return (
    <>
    {/* <Chai/> */}
  
     <h1>Counter App</h1>
     <h2>Counter Update : {Counter}</h2>
     <button
     onClick={AddValue}
     
     >Add Value</button>
     <br></br>
     <br></br>
     <button
     onClick={RemoveValue}
     >Remove Value</button>
    </>
  )
}

export default App
