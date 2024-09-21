import { createSlice } from '@reduxjs/toolkit'
import { registerUser } from '../actions/actionAuth';

const initialState = {
  error: null,
  success: null,
  loading: false,
}



export const authSlide = createSlice({
  name: 'auth',
  initialState,
  reducers: {

  },
  extraReducers: (buildder) => {
    buildder.addCase(registerUser.pending, (state,) => {
      state.loading = true;
    }),
      buildder.addCase(registerUser.fulfilled, (state, { payload }) => {
        state.success = payload.message
        state.loading = false;
      }),
      buildder.addCase(registerUser.rejected, (state, { payload }) => {
        state.error = payload.message
        state.loading = false;
      })
  }
})

// Action creators are generated for each case reducer function


export default authSlide.reducer