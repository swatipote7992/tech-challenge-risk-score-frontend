import React, { PureComponent } from 'react';
import './style.scss';

export default class ResultContainer extends PureComponent {
  render() {
    return (
      <div className="result-container">
        {this.props.children}
      </div>
    );
  }
}