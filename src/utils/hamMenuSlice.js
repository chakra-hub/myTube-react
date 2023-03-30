import { createSlice } from "@reduxjs/toolkit";

const hamMenuSlice = createSlice({
    name:"hamMenu",
    initialState:{
        isMenuOpen : false
    },
    reducers:{
        openAndCloseMenu : (state)=>{
            state.isMenuOpen=!state.isMenuOpen;
            console.log(state.isMenuOpen)
        }
    }
})

export default hamMenuSlice.reducer;
export const {openAndCloseMenu} = hamMenuSlice.actions