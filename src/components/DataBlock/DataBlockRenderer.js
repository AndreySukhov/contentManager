import React, {Fragment} from 'react';

import Card from '../Card';
import TextBlock from '../TextBlock';

import {isHtml, isObj, isValidUrl } from '../../util';

const BlockContent = ({content}) => {

  if (isHtml(content)) {
    return (
      <div dangerouslySetInnerHTML={{__html: content}}/>
    );
  }

  if (isValidUrl(content)) {
    return (
      <div>
        <a href={content} target='_blank' rel='noopener noreferrer'>{content}</a>
      </div>
    );
  }

  return (
    <Fragment>{content}</Fragment>
  );
};

const DataBlockRenderer = ({data}) => {

  if (Array.isArray(data)) {
    return (
      <Fragment>
        {data.map((value, arrIndex) => {
          // i в качестве ключа, тк непонятно, что будет в массиве

          return  (
            <Card key={arrIndex}>
              <DataBlockRenderer data={value}/>
            </Card>
          );
        })}
      </Fragment>
    );
  }

  if (isObj(data)) {
    return (
      <Fragment>
        { Object.entries(data).map(([key, value]) => {
          if (isObj(value) || Array.isArray(value)) {
            return  (
              <Card key={key}>
                {key}
                <DataBlockRenderer data={value}/>
              </Card>
            );
          }

          return (
            <Fragment key={key}>
              <Card>
                <TextBlock >
                  {key}
                </TextBlock>
                <Card>
                  <TextBlock>
                    <BlockContent content={value}/>
                  </TextBlock>
                </Card>
              </Card>
            </Fragment>
          );
        })}
      </Fragment>
    );
  }

  return null;
};

export default DataBlockRenderer;
