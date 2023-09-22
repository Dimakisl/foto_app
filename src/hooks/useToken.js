/* eslint-disable */ 
import {useEffect, useState} from 'react';

export const useToken = (state) => {
  const [token, setToken] = useState(state);

  useEffect(() => {
    const token = new URLSearchParams(window.location.toString().split('=')[1]);
  }, []);
  return [token];
};