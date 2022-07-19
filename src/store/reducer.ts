import { combineReducers } from '@reduxjs/toolkit'
import userSlice from './github/userSlice'

const rootReducer = combineReducers({
  users: userSlice,
})

export default rootReducer
