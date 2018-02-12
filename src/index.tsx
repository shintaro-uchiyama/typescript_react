/* reactとreact-domの読み込み */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import WeatherSearchParent from './components/weather/WeatherSearchParent';

ReactDOM.render(
  <WeatherSearchParent />,
  document.querySelector('.content')
);