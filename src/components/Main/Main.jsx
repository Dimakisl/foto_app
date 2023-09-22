import {Layout} from '../Layout/Layout';
import Modal from '../Modal';
import {List} from './List/List';
import style from './Main.module.css';
import {Route, Routes} from 'react-router-dom';


export const Main = () => {
  return (
    <div className={style.main}>
      <Layout>
        <Routes>
          <Route path='/' element={<List />}>
            <Route path='photos/:id' element={<Modal />} />
          </Route>
        </Routes>
      </Layout>
    </div>
  );
};