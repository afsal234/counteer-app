import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name:'counter',
  //initial value of the state
  initialState:{
    value:0
  },
  //actions
  reducers:{
    increament:(state)=>{
      //logic
      state.value += 1
    },
    decrement:(state)=>{
      state.value -=1
    },
    reset:(state)=>{
      state.value=0
    },
    rangeChange:(state,action)=>{
      state.value += action.payload
    }
  }
})

//actions are for components
export const {increament,decrement,reset,rangeChange} = counterSlice.actions
//reducer is for store
export default counterSlice.reducer