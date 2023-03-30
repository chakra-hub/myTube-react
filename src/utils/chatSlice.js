import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        message:[]
    },
    reducers:{
        updateUser: (state, action)=>{
            state.message.splice(50,1)
            state.message.unshift(action.payload)
        }
    }
})

export default chatSlice.reducer;
export const {updateUser} = chatSlice.actions; 