import * as React from 'react';
import SearchBar from './SearchBar';
import WeatherResult from './WeatherResult';

/**
 * 天気を検索する親コンポーネントのprops
 */
interface WeatherParentComponentProps {
}

/**
 * 天気を検索する親コンポーネントのstate
 */
interface WeatherParentComponentState {
  filterText: string;
}

/**
 * 天気を検索する親コンポーネント
 */
class WeatherParentComponent extends React.Component<WeatherParentComponentProps, WeatherParentComponentState> {
  /**
   * コンストラクター
   * @param props 
   */
  constructor(props: WeatherParentComponentProps) {
    super(props);
    /// stateの初期化
    this.state = {
      filterText: '',
    }
    /// 対象メソッドにthisをバインディング
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  /**
   * inputの入力をstateにセットするメソッド
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
        <SearchBar value={this.state.filterText} onFilterChange={this.handleFilterTextChange} />
        <WeatherResult value={this.state.filterText} />
      </div>
    );
  }
}

export default WeatherParentComponent;