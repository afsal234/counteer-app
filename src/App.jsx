import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increament, rangeChange, reset } from './redux/counterslice'
import { useState } from 'react'


function App() {

const [range,setRange] = useState(0)
const count = useSelector((state)=>state.counterReducer.value)

const dispatch = useDispatch()

const handleRange = ()=>{
  if(!range){
    alert('please enter range')
  }
  else{
    dispatch(rangeChange(Number(range)))
  }
}


console.log(range);


  return (

    <>
  <div style={{backgroundColor:"black",height:"100vh"}} className='d-flex justify-content-center align-items-center'>
    <div style={{backgroundColor:'white',width:'500px'}}className='p-5 rounded'>
      <h1 className='text-info d-flex justify-content-center '>Counter Application </h1>
      <h1 className='text-center my-5' style={{fontSize:'50px'}}>{count}</h1>

      <div className='mt-5 d-flex justify-content-evenly'>
        <button type='button' className="btn btn-warning" onClick={()=>dispatch(decrement())}>Decrement</button>
        <button type='button' className="btn btn-danger" onClick={()=>dispatch(reset())}>Reset</button>
        <button type='button' className="btn btn-success" onClick={()=>dispatch(increament())}>Increrment</button>
      </div>

      <div className='d-flex mt-5'>
         <input type='text' placeholder='Range' className='form-control' onChange={(e)=>setRange(e.target.value)}></input>
         <button className='btn btn-primary ms-3' onClick={handleRange}>Click</button>
      </div>

    </div>
  </div>
    </>
  )
}

export default App