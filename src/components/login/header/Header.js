import React from 'react';
import classes from './Header.module.css'
import Logo from '../../../asset/icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className={classes.Header}>
      <img src={Logo} className={classes.Icon}/>
      <select className={classes.Select}>
        <option>
          <FontAwesomeIcon icon={faQuestionCircle}/>
          Avalanche C-Chain
        </option>
      </select>
    </div>
  );
}

export default Header;
