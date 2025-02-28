import { useEffect, useState } from "react"
import spin from "../Images/spinner1.png"
import Confetti from "react-confetti";


const Paymentdone=()=>{


const [loading,setloading] =useState(true);

useEffect(()=>{
    setTimeout(()=>{
       setloading(false)
    },2000)
})

    return(
        <>

        {loading? <img src={spin} />:
        
        <div style={{width:"100%"}}>
         <Confetti/>
         <h1>your payment is sucessfully completed</h1>
        </div>
          }

          
          
        </>
    )
}

export default Paymentdone