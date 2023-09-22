/* eslint-disable */ 
import {Text} from '../../../../UI/Text';
import style from './Content.module.css';
import {Link} from 'react-router-dom';

import {useEffect, useState} from 'react';
import Modal from '../../../Modal';


export const Content = ({item}) => {
  console.log(item, 'item-cont');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {alt_description, user} = item || [];
  // const dispatch = useDispatch();

  // const handlerClick = (e) => {
  //   e.stopPropagation();
  //   dispatch(postsFotoDataRequestAsync(item.id));
  // };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isModalOpen]);

  return (
    <div className={style.content}>
      {/* <Link className={style.linkPost} to={links?.self} onClick={(e) =>handlerClick(e)}> */}
      <div className={style.item} onClick={() => setIsModalOpen(true)}>
        <Text As='h2' fontWeight='bold' className={style.title}>
          {/* <Link className={style.linkPost} to={`${author.portfolio_url}`}> */}
          <Text size={18} tsize={24} className={style.linkPost}>{alt_description ? alt_description.toString() : '' }</Text>
          {/* </Link> */}
        </Text>
        <Text As='a' size={12} tsize={14} color='orange' className={style.linkAuthor} href={item.portfolio_url}>{user ? user.username.toString() : ''}</Text>
      </div>
      {/* </Link> */}
      {isModalOpen && <Modal item={item} closeModal={() => setIsModalOpen(false)}/>}
    </div>
  );
};