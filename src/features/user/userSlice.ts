import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface UserState {
  value: SpotifyApi.UserProfileResponse;
  // value: object,
}

const initialState: UserState = {
	value: {} as SpotifyApi.UserProfileResponse,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		storeUser: (state, action: PayloadAction<SpotifyApi.UserProfileResponse>) => {
			state.value= action.payload
		}
	}
})

export const { storeUser } = userSlice.actions

export default userSlice.reducer