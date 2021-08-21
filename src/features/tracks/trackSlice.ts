import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface ITrackState {
	searchTracks: SpotifyApi.TrackObjectFull[];
	selectedTracks: string[];
}

const initialState: ITrackState={
	searchTracks: [],
	selectedTracks: []
}

export const tracks = createSlice({
	name: 'track',
	initialState,
	reducers: {
		storeTracks: (state, action: PayloadAction<SpotifyApi.TrackObjectFull[]>) => {
			state.searchTracks = action.payload
		},
		storeSelected: (state, action: PayloadAction<string[]>) => {
			state.selectedTracks = action.payload
		}
	}
})

export const { storeTracks, storeSelected } = tracks.actions

export default tracks.reducer