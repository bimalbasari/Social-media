
import { createSlice, combineReducers, createAsyncThunk } from "@reduxjs/toolkit"



export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: null,
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

export default rootReducers