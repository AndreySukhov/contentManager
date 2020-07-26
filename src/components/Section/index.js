import React from 'react';

import style from './section.module.css';

const Section = ({children}) => {
  return (
    <div className={style['section']}>
      {children}
    </div>
  );
};

export default Section;
