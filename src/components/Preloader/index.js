import React from 'react';
import './preloader.css';

const Preloader = () => {
  return (
    <div className='lds-ring'>
      <div className='lds-ring__el'/>
      <div className='lds-ring__el'/>
      <div className='lds-ring__el'/>
      <div className='lds-ring__el'/>
    </div>
  );
};


export default Preloader;