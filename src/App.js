import React from 'react';

import Section from './components/Section';
import DataBlock from './components/DataBlock';

import './assets/style/main.css';

import { JSON1, JSON2 } from './data/data';

const App = () => {

  return (
    <div className='content-blocks-wrap'>
      <Section>
        <DataBlock legend='data source 1'  jsonData={JSON1} />
      </Section>
      <Section>
        <DataBlock legend='data source 2' jsonData={JSON2} />
      </Section>
    </div>
  );
};

export default App;
