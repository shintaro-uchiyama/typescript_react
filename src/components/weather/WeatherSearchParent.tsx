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
  filterText: string;
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
      filterText: '',
    }
    /// 対象メソッドにthisをバインディング
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  /**
   * WeatherSearchBarの入力をstateにセットするメソッド
   * @param e 
   */
  handleFilterTextChange(e: any): void {
    this.setState({
      filterText: e.target.value,
    });
  }

  /**
   * 表示する部品
   */
  render() {
    return (
      <div>
        <WeatherSearchBar onFilterChange={this.handleFilterTextChange} />
        <WeatherSearchResult value={this.state.filterText} />
      </div>
    );
  }
}

export default WeatherSearchParent;