import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ICountry } from '@/models/country.model'
import { IFilterValue } from '@/models/other.model'
import { IPropertyStage, IPropertyType } from '@/models/property.model'

export interface IFilterStateValue {
	country: Partial<ICountry>
	price: Partial<IFilterValue>
	type: Partial<IPropertyType>
	stage: Partial<IPropertyStage>
}

const initialState: IFilterStateValue = {
	country: {},
	price: {},
	type: {},
	stage: {}
}
export const filterSlice = createSlice({
	name: 'filter-value',
	initialState,
	reducers: {
		setCountry(state, action: PayloadAction<ICountry>) {
			state.country = action.payload
		},
		setType(state, action: PayloadAction<Partial<IPropertyType>>) {
			state.type = action.payload
		},
		setPrice(state, action: PayloadAction<IFilterValue>) {
			state.price = action.payload
		},
		setStage(state, action: PayloadAction<IPropertyStage>) {
			state.stage = action.payload
		},

		resetFrom(state) {
			state.country = {}
			state.price = {}
			state.type = {}
			state.stage = {}
		}
	}
})

export const FilterReducer = filterSlice.reducer
export const filterActions = filterSlice.actions
