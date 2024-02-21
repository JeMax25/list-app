import { configureStore } from '@reduxjs/toolkit'
import { listSlice } from './slices/list/listSlice'
import { authSlice } from './slices/auth-form/authSlice'


export const store = configureStore({
  reducer: {
    list: listSlice.reducer,
    auth: authSlice.reducer
  },
})
