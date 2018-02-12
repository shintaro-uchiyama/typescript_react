/* reactとreact-domの読み込み */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import WeatherParentComponent from './components/WeatherParentComponent';

ReactDOM.render(
  <WeatherParentComponent />,
  document.querySelector('.content')
);