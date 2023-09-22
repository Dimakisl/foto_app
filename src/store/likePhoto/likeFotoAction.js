import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {URL_API} from '../../API/const';
import {getTokenLocalStorage} from '../../API/token';

export const likeFotoRequestAsync = createAsyncThunk('likeFoto/fetch', (id, {getState}) => {
  const accessToken = getTokenLocalStorage();
  console.log(accessToken, 'accessToken');

  return axios.post(`${URL_API}/photos/${id}/like`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
    .then(({data}) => {
      console.log(data, 'data-like');
      return {data};
    }).catch(error => {
      return {error: error.toString()};
    });
});