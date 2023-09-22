import {useEffect} from 'react';
import style from './List.module.css';
import {Post} from './Post/Post';
import {useDispatch, useSelector} from 'react-redux';
import {postsFotoRequestAsync} from '../../../store/PostFoto/postFotoAction';
import {userDataRequestAsync} from '../../../store/userData/userDataAction';
import Loader from '../../../UI/Loader';

export const List = () => {
  const dispatch = useDispatch();
  const dataFotos = useSelector(state => state.fotos.fotos);
  const loading = useSelector(state => state.fotos.status);

  useEffect(() => {
    setTimeout(() => {
      dispatch(postsFotoRequestAsync());
      dispatch(userDataRequestAsync());
    }, 2000);
  }, []);

  return (
    <>
      {loading === 'loading' &&
        <div
          style={{
            position: 'fixed',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}
        ><Loader /></div>}
      <ul className={style.list}>
        {
          dataFotos && dataFotos.map((postData, index) => (
            <Post postData={postData} key={postData.id}/>
          ))
        }
      </ul>
    </>
  );
};