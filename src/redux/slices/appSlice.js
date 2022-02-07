import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    darkModeOn: false,
}

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setDarkMode: (state, action) => {
            state.darkModeOn = action.payload
        }
    },
})

export const { setDarkMode } = appSlice.actions
export default appSlice.reducer