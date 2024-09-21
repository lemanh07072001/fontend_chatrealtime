import { createSlice } from '@reduxjs/toolkit'
import { profileUser } from '../actions/actionAuth';

const initialState = {

}



export const profileSlide = createSlice({
  name: 'profile',
  initialState,
  reducers: {

  },
  extraReducers: (buildder) => {
    buildder.addCase(profileUser.pending, (state,) => {
        console.log(state);
    }),
      buildder.addCase(profileUser.fulfilled, (state) => {
        console.log(state);
      }),
      buildder.addCase(profileUser.rejected, (state) => {
        console.log(state);
      })
  }
})

// Action creators are generated for each case reducer function


export default profileSlide.reducer