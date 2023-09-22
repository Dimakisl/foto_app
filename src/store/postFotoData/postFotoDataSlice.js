import {createSlice} from '@reduxjs/toolkit';
import {postsFotoDataRequestAsync} from './postFotoDataAction';

const initialState = {
  fotoData: [],
  error: '',
  status: '',
};

const fotoDataSlice = createSlice({
  name: 'fotoData',
  initialState,
  extraReducers: {
    [postsFotoDataRequestAsync.pending.type]: (state) => {
      state.error = '';
      state.status = 'loading';
      state.fotoData = [];
    },
    [postsFotoDataRequestAsync.fulfilled.type]: (state, action) => {
      console.log(action, 'actions-fulfilled');
      state.fotoData = action.payload?.data;
      state.error = '';
      state.status = 'loaded';
    },
    [postsFotoDataRequestAsync.rejected.type]: (state, action) => {
      state.error = action.payload.error;
      state.status = 'error';
    }
  }
});

export default fotoDataSlice.reducer;