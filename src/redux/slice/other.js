import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
}

const otherSlice = createSlice({
  name: 'other',
  initialState,
  reducers: {
    changeLoading(state, action) {
      state.loading = action.payload
    },
  },
})

export default otherSlice.reducer
export const { changeLoading } = otherSlice.actions
