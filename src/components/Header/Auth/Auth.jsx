import style from './Auth.module.css';
import loginImg from './img/login.svg';
import {urlAuth} from '../../../API/auth';
import {useDispatch, useSelector} from 'react-redux';
import {deleteToken, getToken, getTokenLocalStorage} from '../../../API/token';
import {API_URL_TOKEN, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI} from '../../../API/const';
import {delToken, updateToken} from '../../../store/tokenReducer';
import {useEffect} from 'react';
import {authRequestSuccess} from '../../../store/authReducer';

export const Auth = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user.user);
  console.log(userData, 'userData');

  const token = getToken();
  const tokenAccess = getTokenLocalStorage();
  const url = new URL(API_URL_TOKEN);
  let code;

  useEffect(() => {
    if (window.location.search.includes('code')) {
      code = new URLSearchParams(window.location.search).get('code');
      console.log(code, 'code');
      url.searchParams.append('client_id', CLIENT_ID);
      url.searchParams.append('client_secret', CLIENT_SECRET);
      url.searchParams.append('redirect_uri', REDIRECT_URI);
      url.searchParams.append('code', code);
      url.searchParams.append('grant_type', 'authorization_code');
    }
  }, [code]);

  useEffect(() => {
    dispatch(updateToken(getToken()));
    if (!token) return;
    fetch(`${url}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => response.json()).then(data => {
      console.log(data, 'data');
      dispatch(authRequestSuccess(data));
    });
  }, [token]);

  const logOut = () => {
    dispatch(delToken());
    window.location.replace('http://localhost:3000');
    deleteToken();
  };


  return (
    <div className={style.container}>
      <a href={urlAuth}>
        <img className={style.svg} src={loginImg} alt="login" />
      </a>
      <p>{userData?.name || userData?.username}</p>
      {tokenAccess ? <button className={style.logout} onClick={() => logOut()}>Выход</button> : ''}
    </div>
  );
};