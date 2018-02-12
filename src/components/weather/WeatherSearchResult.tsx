import * as React from 'react';

/**
 * 天気結果出力コンポーネントのprops
 */
interface WeatherSearchResultProps{
    value: string;
}

/**
 * 天気結果出力コンポーネント
 * @param props 
 */
const WeatherSearchResult: React.StatelessComponent<WeatherSearchResultProps> = (props) => {
    return(
        <div>{props.value}</div>
    );
}

export default WeatherSearchResult;