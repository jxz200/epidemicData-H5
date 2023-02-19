import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export interface provinceData {
    asymptomatic: string
    curConfirm: string
    confirm: string
    heal: string
    died: string
    xArea: string
    updateTime:string
    subList: cityData[]
}

export interface cityData {
    city: string,
    asymptomatic: string,
    curConfirm: string,
    confirm: string,
    heal: string,
    died: string,
}

const provinceDataList: provinceData[] = []

const initialState = {
    value: provinceDataList
}

export const provinceDataCounter = createSlice({
    name: 'provinceData',
    initialState,
    reducers: {
        setProvinceData: (state, action: PayloadAction<provinceData[]>) => {
            state.value = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const {setProvinceData} = provinceDataCounter.actions

export default provinceDataCounter.reducer