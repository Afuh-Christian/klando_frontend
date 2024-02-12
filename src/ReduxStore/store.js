import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './Counter/CounterSlice'
import AuthUserReducer from './AuthSlice'

export const store = configureStore({
  reducer: {
    counter_reducer: CounterReducer, 
    auth_reducer: AuthUserReducer, 
  },
})