import React, { Component } from 'react';
import styles from './App.scss';
import classNames from 'classnames/bind'

const cx = classNames.bind(styles);

class App extends Component {
  render() {
    const isBlue = false;
    return (
      <div className={cx('box', {
        blue: isBlue
      })}>
        <div className={cx('box-inside')} />
      </div>
    );
  }
}

export default App;
