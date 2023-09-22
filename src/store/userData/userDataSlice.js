import {createSlice} from '@reduxjs/toolkit';
import {userDataRequestAsync} from './userDataAction';

const initialState = {
  user: {},
  error: '',
  status: '',
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  extraReducers: {
    [userDataRequestAsync.pending.type]: (state) => {
      state.error = '';
      state.status = 'loading';
      state.user = [];
    },
    [userDataRequestAsync.fulfilled.type]: (state, action) => {
      console.log(action, 'actions-fulfilled');
      state.user = action.payload?.data;
      state.error = '';
      state.status = 'loaded';
    },
    [userDataRequestAsync.rejected.type]: (state, action) => {
      state.error = action.payload.error;
      state.status = 'error';
    }
  }
});

export default userDataSlice.reducer;