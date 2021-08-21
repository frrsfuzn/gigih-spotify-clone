import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ITokenState {
	value: string
}

const initialState: ITokenState = {
	value: ""
}

export const tokenSlice = createSlice({
	name: 'token',
	initialState,
	reducers: {
		storeToken: (state, action: PayloadAction<string>) => {
			state.value = action.payload
		}
	}
})

export const { storeToken } = tokenSlice.actions

export default tokenSlice.reducer