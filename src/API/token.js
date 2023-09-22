export const setToken = (token) => {
  localStorage.setItem('bearer', token);
};

export const setTokenAccess = (token) => {
  localStorage.setItem('access_token', token);
  window.location.replace('http://localhost:3000');
};

export const deleteToken = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('bearer');
};

export const getTokenLocalStorage = () => {
  return localStorage.getItem('access_token');
};

export const getToken = () => {
  const token = new URLSearchParams(window.location.search).get('code');

  setToken(token);

  if (localStorage.getItem('bearer')) {
    setToken(localStorage.getItem('bearer', token));
  }

  return token;
};