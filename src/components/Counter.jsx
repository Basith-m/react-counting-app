import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement,increment,incrementByAmount,reset } from '../redux/counterSlice'

function Counter() { 

const [amount,setAmount] = useState("")
const dispatch = useDispatch()
 const count  = useSelector((state)=>state.counter.count)

 const handleIncrement =()=>{
  if(amount=="")
  {
    alert("Please Provide Amount")
  }
  else{
    // dispatch action
    dispatch(incrementByAmount(Number(amount)))
  }
 }
  return (
    <div style={{height:'70vh'}} className='w-100 d-flex justify-content-center align-items-center mt-5'>
        <div className='d-flex justify-content-between align-items-center border rounded p-2 w-25 flex-column'>
            <h1 style={{fontSize:'100px'}}>{count}</h1>
            <div className='d-flex justify-content-around align-items-center w-100 mt-5'>
                <button className='btn btn-warning' onClick={()=>dispatch(decrement())}>Decrement</button>
                <button className='btn btn-danger' onClick={()=>dispatch(reset())}>Reset</button>
                <button className='btn btn-success' onClick={()=>dispatch(increment())}>Increment</button>
            </div>
            <div className='d-flex mt-5 mb-3 w-100'>
              <input style={{fontSize:'15px'}} type="text" placeholder='Enter the amout to be increment' className='form-control' onChange={(e)=>setAmount(e.target.value)} /> 
              <button className='btn btn-primary ms-3' onClick={handleIncrement}>Increment by</button>
            </div>
        </div>
    </div>
  )
}

export default Counter