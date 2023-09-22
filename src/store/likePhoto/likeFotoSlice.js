import {createSlice} from '@reduxjs/toolkit';
import {likeFotoRequestAsync} from './likeFotoAction';

const initialState = {
  fotos: [],
  error: '',
  status: '',
};

const likefotoSlice = createSlice({
  name: 'likefotos',
  initialState,
  extraReducers: {
    [likeFotoRequestAsync.pending.type]: (state) => {
      state.error = '';
      state.status = 'loading';
      state.fotos = [];
    },
    [likeFotoRequestAsync.fulfilled.type]: (state, action) => {
      console.log(action, 'actions-fulfilled');
      state.fotos = action.payload?.data;
      state.error = '';
      state.status = 'loaded';
    },
    [likeFotoRequestAsync.rejected.type]: (state, action) => {
      state.error = action.payload.error;
      state.status = 'error';
    }}
});

export default likefotoSlice.reducer;