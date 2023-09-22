/* eslint-disable */ 
import style from './Post.module.css';
import notPhoto from '../Post/img/notphoto.jpg';
import {Content} from '../Content/Content';
import {DateTime} from './DateTime/DateTime';

export const Post = ({postData}) => {
  const {links, alt_description, created_at, likes} = postData || [];
  return (
    postData &&
    <>
      <li className={style.post}>
        <img className={style.img} src={links.download ? links.download : notPhoto} alt={alt_description} />
        <Content item={postData}/>
        <p>Нравится: {likes}</p>
        <DateTime date={created_at ? created_at : new Date()}/>
      </li>
    </>
  );
};