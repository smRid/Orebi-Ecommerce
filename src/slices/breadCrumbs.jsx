import { createSlice } from '@reduxjs/toolkit'

export const breadCrumbs = createSlice({
  name: 'breadCrumbs',
  initialState: {
    currentName: "",
    previousName: "",
  },
  reducers: {
    pages: (state,actions) => {
      state.previousName=state.currentName
      state.currentName=actions.payload
        
    }
  },
})

export const { pages } = breadCrumbs.actions

export default breadCrumbs.reducer