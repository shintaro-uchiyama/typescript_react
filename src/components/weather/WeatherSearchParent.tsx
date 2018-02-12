import * as React from 'react';
import WeatherSearchBar from './WeatherSearchBar';
import WeatherSearchResult from './WeatherSearchResult';

/**
 * 天気を検索する親コンポーネントのprops
 */
interface WeatherSearchParentProps {
}

/**
 * 天気を検索する親コンポーネントのstate
 */
interface WeatherSearchParentState {
  inputText: string;
  requestedCity: string;
  responseData: any;
}

/**
 * 天気を検索する親コンポーネント
 */
class WeatherSearchParent extends React.Component<WeatherSearchParentProps, WeatherSearchParentState> {
  /**
   * コンストラクター
   * @param props 
   */
  constructor(props: WeatherSearchParentProps) {
    super(props);
    /// stateの初期化
    this.state = {
      inputText: '',
      requestedCity: '',
      responseData: [],
    }
    /// 対象メソッドにthisをバインディング
    this.handleInputTextChange = this.handleInputTextChange.bind(this);
    this.handleAjaxResponseSet = this.handleAjaxResponseSet.bind(this);
  }

  /**
   * WeatherSearchBarの入力をstateにセットするメソッド
   * @param e 
   */
  handleInputTextChange(e: any): void {
    this.setState({
      inputText: e.target.value,
    });
  }

  /**
   * ajax通信の結果をstateにセットするメソッド
   */
  handleAjaxResponseSet(data: any, requestedCity: string): void {
    this.setState({
      responseData: data,
      requestedCity: requestedCity,
    });
  }

  /**
   * 表示する部品
   */
  render() {
    return (
      <div>
        <WeatherSearchBar onInputChange={this.handleInputTextChange} />
        <WeatherSearchResult inputText={this.state.inputText} requestedCity={this.state.requestedCity} responseData={this.state.responseData} setAjaxResponse={this.handleAjaxResponseSet} />
      </div>
    );
  }
}

export default WeatherSearchParent;