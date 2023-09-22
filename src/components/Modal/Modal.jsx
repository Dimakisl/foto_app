import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import ReactDOM from 'react-dom';
import {useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {likeFotoRequestAsync} from '../../store/likePhoto/likeFotoAction';

export const Modal = ({item, closeModal}) => {
  console.log(item, 'item');

  const overlayRef = useRef(null);
  const dispatch = useDispatch();

  const handleClick = e => {
    const target = e.target;

    if (target === overlayRef.current) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const likeClick = (id) => {
    dispatch(likeFotoRequestAsync(id));
  };

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        <h2 className={style.title}>{item.alt_description}</h2>
        <img src={item.links.download} alt="" />
        <div className={style.content}>

        </div>
        <p>Пользователь: <a className={style.author} href={item.user.portfolio_url} target='_blanc'>{item.user ? item.user.username : ''}</a></p>
        <p>Нравится: {item.likes}</p>
        <p>Дата создания: {item.created_at}</p>
        <button className={style.close}>
          <CloseIcon onClick={() => closeModal()}/>
        </button>
        <button onClick={() => likeClick(item.id)}>Like</button>
      </div>
    </div>, document.getElementById('modal-root'));
};