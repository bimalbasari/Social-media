
import { createSlice, combineReducers, createAsyncThunk } from "@reduxjs/toolkit"



export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).user : null,

    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
            
        }
    }
})

export const { login } = userSlice.actions;


const rootReducers = combineReducers({
    user: userSlice.reducer
})

export const selectUser=(state)=>state.user.value;
export default rootReducers;