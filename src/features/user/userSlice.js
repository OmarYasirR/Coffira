import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: null,
    addresses: [],
  },
  reducers: {
    setProfile(state, action) {
      state.profile = action.payload
    },
    setAddresses(state, action) {
      state.addresses = action.payload
    },
  },
})

export const { setProfile, setAddresses } = userSlice.actions
export default userSlice.reducer
