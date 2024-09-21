import { configureStore } from '@reduxjs/toolkit'
import authSlide from '../sildes/authSlide'
import loginSlide from '../sildes/loginSlide'

export const store = configureStore({
  reducer: {
    auth : authSlide,
    login : loginSlide,
  },
})