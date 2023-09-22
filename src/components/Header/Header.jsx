import {Layout} from '../Layout/Layout';
import Logo from './Logo/';
import Seacrh from './Search';
import Auth from './Auth';
import Heading from './Heading';

import style from './Header.module.css';

export const Header = () => {
  return (
    <header className={style.header}>
      <Layout>
        <div className={style.gridContainer}>
          <Logo/>
          <Heading text='Photo'/>
          <Seacrh />
          <Auth/>
        </div>
      </Layout>
    </header>
  );
};