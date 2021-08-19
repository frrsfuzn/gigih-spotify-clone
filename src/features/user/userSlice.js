import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: {},
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		storeUser: (state, action) => {
			state.value= action.payload
		}
	}
})

export const { storeUser } = userSlice.actions

export default userSlice.reducer