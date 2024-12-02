import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface PlayerStateValue {
	isPlaying: boolean
}
const initialState: PlayerStateValue = {
	isPlaying: false
}

export const playerSlice = createSlice({
	name: 'music-player',
	initialState,
	reducers: {
		setIsPlaying(state, action: PayloadAction<boolean>) {
			state.isPlaying = action.payload
		}
	}
})

export const PlayerReducer = playerSlice.reducer
export const playerActions = playerSlice.actions
