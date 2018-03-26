import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { translate } from 'react-i18next'

class App extends Component {
  render() {
    const { t } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{t('WELCOME_TEXT')}</h1>
        </header>
        <p className="App-intro">
          {t('INTRO_TEXT')}
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default translate('translations')(App);
