import { Fragment } from 'react';

import HeaderCart from './CartButton';
import mealsImage from '../../Assets/foodImage.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>FoodOnDoor</h1>
        <HeaderCart onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
