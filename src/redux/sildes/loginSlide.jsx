import { createSlice } from '@reduxjs/toolkit'
import { loginUser } from '../actions/actionAuth';


const authToken = localStorage.getItem('authToken') ? localStorage.getItem('authToken') : null;

const initialState = {
  loading: false,
  authToken,
}

export const loginSlide = createSlice({
  name: 'login',
  initialState,
  reducers: {

  },
  extraReducers: (buildder) => {
    buildder.addCase(loginUser.pending, (state,) => {
      state.loading = true;
    }),
      buildder.addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        
        state.authToken = payload.token.plainTextToken;
       
      }),
      buildder.addCase(loginUser.rejected, (state) => {
        state.loading = false;
      })
  }
})

// Action creators are generated for each case reducer function


export default loginSlide.reducer