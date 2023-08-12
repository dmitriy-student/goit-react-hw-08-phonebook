import * as authOperations from './authOperations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
};

const handleRejected = (state, action) => {
  state.isLoggedIn = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [authOperations.register.rejected]: handleRejected,

    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [authOperations.logIn.rejected]: handleRejected,

    [authOperations.logOut.fulfilled](state) {
      state.user = '';
      state.token = '';
      state.isLoggedIn = false;
      state.error = null;
    },
    [authOperations.logOut.rejected]: handleRejected,

    [authOperations.refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.error = null;
    },
    [authOperations.refreshUser.rejected]: handleRejected,
  },
});

export default authSlice.reducer;
