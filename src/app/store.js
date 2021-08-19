import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import tokenReducer from '../features/token/tokenSlice'

export const store = configureStore({
	reducer: {
		user: userReducer,
		token: tokenReducer
	},
})