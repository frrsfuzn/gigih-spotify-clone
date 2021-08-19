import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: ""
}

export const tokenSlice = createSlice({
	name: 'token',
	initialState,
	reducers: {
		storeToken: (state, action) => {
			state.value = action.payload
		}
	}
})

export const { storeToken } = tokenSlice.actions

export default tokenSlice.reducer