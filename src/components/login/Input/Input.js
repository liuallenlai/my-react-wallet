import React,{useState} from 'react';
import classes from './Input.module.css'

const Input = () => {
  const [value,setValue] = useState('')
  const onChangeInput = (e) => {
    setValue(e.target.value)
  }
  return (
    <div className={classes.Wrapper}>
      <input 
        className={classes.Input} 
        placeholder={'密码'}
        type="password"
        onChange={onChangeInput}
        />
      <button className={classes.Login}>登录</button>
      <p className={classes.Title}>忘记密码？</p>
    </div>
  );
}

export default Input;
