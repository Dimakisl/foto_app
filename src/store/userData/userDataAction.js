import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {URL_API} from '../../API/const';
import {getTokenLocalStorage} from '../../API/token';

export const userDataRequestAsync = createAsyncThunk('userData/fetch', (id, {getState}) => {
  const accessToken = getTokenLocalStorage();
  return axios.get(`${URL_API}/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
    .then(({data}) => {
      console.log(data, 'dataUser-splash');
      return {data};
    }).catch(error => {
      return {error: error.toString()};
    });
});