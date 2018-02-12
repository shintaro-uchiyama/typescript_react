import * as React from 'react';

/**
 * 検索バーコンポーネントのprops
 */
interface WeatherSearchBarProps {
    onFilterChange(e: any): void;
}

/**
 * 検索バーコンポーネント
 * @param props 
 */
const WeatherSearchBar: React.StatelessComponent<WeatherSearchBarProps> = (props) => {
    return(
        <input type="text" placeholder="Input City" onChange={props.onFilterChange} />
    );
}

export default WeatherSearchBar;