import React from 'react';
// import Icon from '../../../asset/icon.png'
import Icon from '../../../asset/icon.png'
import classes from './Welcome.module.css'

const Welcome = () => {
  return (
    <div className={classes.Content}>
      <img src={Icon} alt=""/>
      <h1>欢迎回来！</h1>
      <p>即将进入去中心化网络</p>
    </div>
  );
}

export default Welcome;
