import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { FilterReducer } from './slices/storage-slice'

const rootReducer = combineReducers({
	storage: FilterReducer
})

export const makeStore = () =>
	configureStore({
		reducer: rootReducer
	})

export const store = makeStore()

export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']

export type TypeRootState = ReturnType<typeof rootReducer>
