import { createSlice, combineReducers } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).user : null,
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
      // localStorage.setItem('user', JSON.stringify({ user: action.payload }));
    },
  },
});

export const eventSlice = createSlice({
  name: 'event',
  initialState: {
    value: [],
  },
  reducers: {
    addEvents: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { login } = userSlice.actions;
export const { addEvents } = eventSlice.actions;

const rootReducer = combineReducers({
  user: userSlice.reducer,
  event: eventSlice.reducer,
});

export const selectUser = (state) => state.user.value;
export const selectEvent = (state) => state.event.value;

export default rootReducer;
