import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import tokenReducer from '../features/token/tokenSlice'
import trackReducer from '../features/tracks/trackSlice'

export const store = configureStore({
	reducer: {
		user: userReducer,
		token: tokenReducer,
		track: trackReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch