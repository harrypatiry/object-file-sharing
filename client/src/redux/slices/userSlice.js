import { createSlice } from '@reduxjs/toolkit'

// still need to use localStorage so the user info persists

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: localStorage.getItem('user')
  },
  reducers: {
    login: (state, action) => {
      const user = action.payload;
      localStorage.setItem('user', user.name);
      // state.user = user;
      state.user = localStorage.getItem('user', user.name);
    },
    logout: (state) => {
      localStorage.removeItem('user');
      state.user = null;
    },
  },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer