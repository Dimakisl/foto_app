import {useEffect, useState} from 'react';
import style from './Tabs.module.css';
import {assignId} from '../../../utils/generateRandomId';
import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as bestIcon} from './img/best.svg';
import {ReactComponent as TopIcon} from './img/top.svg';
import {ReactComponent as HotIcon} from './img/hot.svg';
import {debounceRaf} from '../../../utils/debounce';
// import {useNavigate} from 'react-router-dom';

const LIST = [
  {value: 'Главная', Icon: HomeIcon, link: 'rising'},
  {value: 'Топ', Icon: TopIcon, link: 'top'},
  {value: 'Лучшее', Icon: bestIcon, link: 'best'},
  {value: 'Горячие', Icon: HotIcon, link: 'hot'},
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDopdown] = useState(true);
  const [menu, setMenu] = useState('Главная');
  // const navigate = useNavigate();

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDopdown(true);
    } else {
      setIsDopdown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    handleResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);


  const handleClick = value => {
    setMenu(value);
  };

  return (
    <div className={style.container}>
      {isDropdown && (
        <div className={style.wrapperBtn}>
          <button className={style.btn} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {menu}
            <ArrowIcon width={15} height={15}/>
          </button>
        </div>
      )}
      {(isDropdownOpen || !isDropdown) && <ul className={style.list} onClick={() => setIsDropdownOpen(false)}>
        {LIST.map(({value, id, Icon, link}) => (
          <li className={style.item} key={id}>
            <button className={style.btn}
              onClick={() => {
                handleClick(value);
                // navigate(`/category/${link}`);
              }
              }>
              {value}
              {Icon && <Icon width={25} height={25}/>}
            </button>
          </li>
        ))}
      </ul>}
    </div>
  );
};