import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
  message: '',
};

export const userSlice = createSlice({
  name: 'username',
  initialState,
  reducers: {
    // You can improve your actions by giving them constant
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;

      state.message = 'logged in!';
    },
    loginFailed: (state, action) => {
      state.loading = false;
      state.error = true;
      state.message = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
      state.message = 'logged out!';
    },
    subscription: (state, action) => {
      if (state.currentUser.subscribedUsers.includes(action.payload)) {
        state.currentUser.subscribedUsers.splice(
          state.currentUser.subscribedUsers.findIndex(
            (channelId) => channelId === action.payload
          ),
          1
        );
      } else {
        state.currentUser.subscribedUsers.push(action.payload);
      }
    },
  },
});

export const { loginStart, loginSuccess, loginFailed, logout, subscription } =
  userSlice.actions;

export default userSlice.reducer;
