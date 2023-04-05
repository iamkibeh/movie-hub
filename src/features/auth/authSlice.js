import { createSlice } from '@reduxjs/toolkit'
import { loginUser, registerUser } from './authActions'

const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null
const initialState = {
  userInfo: {},
  status: 'idle',
  error: null,
  userToken,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userToken')
      state.userInfo = null
      state.userToken = null
      state.status = 'idle'
      state.error = null
    },
    clearErrors: (state) => {
      state.error = null
      // console.log('clearErrors in play')
    },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    // register user reducers
    [registerUser.pending]: (state) => {
      state.status = 'loading'
    },
    [registerUser.fulfilled]: (state, action) => {
      state.status = 'success'
      // state.userInfo = action.payload
    },
    [registerUser.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    },

    // login user reducers
    [loginUser.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [loginUser.fulfilled]: (state, action) => {
      state.status = 'success'
      state.userInfo = action.payload
      state.userToken = action.payload.jwt
    },
    [loginUser.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    },
  },
})

export const { logout, clearErrors } = authSlice.actions

export default authSlice.reducer
