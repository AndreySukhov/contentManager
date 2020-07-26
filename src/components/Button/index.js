import React from 'react';
import cc from 'classcat';

import style from './button.module.css';

const Button = ({children, icon, onClick = () => {}}) => {

  return (
    <button className={cc([style.btn, {
      [style['with-icon']]: !!icon
    }])} onClick={onClick}>
      {children} {!!icon && <div className={style.icon}>{icon}</div>}
    </button>
  );
};

export default Button;
