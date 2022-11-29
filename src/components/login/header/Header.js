import React from 'react';
import classes from './Header.module.css'
import Logo from '../../../asset/icon.png'

const Header = () => {
  return (
    <div className={classes.Header}>
      <img src={Logo} className={classes.Icon}/>
      <select className={classes.Select}>
        <option>
          Avalanche C-Chain
        </option>
      </select>
    </div>
  );
}

export default Header;
