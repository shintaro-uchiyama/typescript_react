import * as React from 'react';

/**
 * 検索結果項目コンポーネントのprops
 */
interface WeatherSearchResultRowProps {
    date: string;
    temprature: string;
}

/**
 * 検索結果項目コンポーネント
 * @param props
 */
const WeatherSearchResultRow: React.StatelessComponent<WeatherSearchResultRowProps> = (props) => {
    return (
        <tr>
            <td>{props.date}</td>
            <td>{props.temprature}℃</td>
        </tr>
    );
}

export default WeatherSearchResultRow;