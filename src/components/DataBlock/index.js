import React, { memo, useState} from 'react';
import cc from 'classcat';

import Button from '../Button';
import DataBlockRenderer from './DataBlockRenderer';
import Preloader from '../Preloader';

import style from './data-block.module.css';

import { ReactComponent as ChevronRight } from '../../assets/images/chevron.svg';

import {createRandomNum} from '../../util';

const DataBlock = memo(({legend = '', jsonData = {}}) => {

  const [expanded, setExpanded] = useState(false);
  const [pending, setPending] = useState(true);
  const [data, setData] = useState({});

  setTimeout(() => {
    setPending(false);
    setData(jsonData);
  }, createRandomNum(1000, 2000));

  if (pending) {
    return (
      <div className='tc preloader-wrap'><Preloader /></div>
    );
  }

  return (
    <div className={style['wrap']}>
      <Button onClick={() => {setExpanded(!expanded);}}
        icon={<div className={cc([style['btn-expanded-base'], {
          [style['btn-expanded']]: expanded
        }
        ])}>
          <ChevronRight />
        </div>}>
        {legend}
      </Button>
      {!!expanded && <div className={style['block-content']}>
        <DataBlockRenderer data={data} />
      </div>}
    </div>
  );
});

DataBlock.displayName = 'DataBlock';

export default DataBlock;
