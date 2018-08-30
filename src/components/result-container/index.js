import React from 'react';
import './style.scss';

const ResultContainer = props => (
  <div className="result-container">
    {props.children}
  </div>
);
export default ResultContainer;