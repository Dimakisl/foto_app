import {createSlice} from '@reduxjs/toolkit';
import {postsFotoRequestAsync} from './postFotoAction';

const initialState = {
  fotos: [],
  error: '',
  status: '',
};

const fotosSlice = createSlice({
  name: 'fotos',
  initialState,
  extraReducers: {
    [postsFotoRequestAsync.pending.type]: (state) => {
      state.error = '';
      state.status = 'loading';
      state.fotos = [];
    },
    [postsFotoRequestAsync.fulfilled.type]: (state, action) => {
      console.log(action, 'actions-fulfilled');
      state.fotos = action.payload?.data;
      state.error = '';
      state.status = 'loaded';
    },
    [postsFotoRequestAsync.rejected.type]: (state, action) => {
      state.error = action.payload.error;
      state.status = 'error';
    }
  }
});

export default fotosSlice.reducer;