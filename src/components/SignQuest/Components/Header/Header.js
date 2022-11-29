import React from 'react';
import classes from './Header.module.css'

const Header = () => {
  return (
    <>
    <div className={classes.Header}>
      签名请求
    </div>
    <div className={classes.Content}>请求签名？</div>
    <footer>
      <div className={classes.Cancel}>取消</div>
      <div className={classes.Checkout}>确认</div>
    </footer>
    </>
  );
}

export default Header;
