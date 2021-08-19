import {createSlice} from '@reduxjs/toolkit'

const initialState={
	searchTracks: [],
	selectedTracks: []
}

export const tracks = createSlice({
	name: 'track',
	initialState,
	reducers: {
		storeTracks: (state, action) => {
			state.searchTracks = action.payload
		},
		storeSelected: (state, action) => {
			state.selectedTracks = action.payload
		}
	}
})

export const { storeTracks, storeSelected } = tracks.actions

export default tracks.reducer