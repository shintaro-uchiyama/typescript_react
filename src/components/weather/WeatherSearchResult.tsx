import * as $ from 'jquery';
import * as React from 'react';
import WeatherSearchResultRow from './WeatherSearchResultRow';

/**
 * 天気結果出力コンポーネントのprops
 */
interface WeatherSearchResultProps {
    inputText: string;
    requestedCity: string;
    responseData: any;
    setAjaxResponse(responseWeatherData: any, requestCity: string): void;
}

/**
 * 天気結果出力コンポーネント
 * @param props 
 */
class WeatherSearchResult extends React.Component<WeatherSearchResultProps>{
    constructor(props: WeatherSearchResultProps) {
        super(props);
        //        this.getWeatherApi = this.getWeatherApi.bind(this);
    }

    /**
     * Ajaxによる天気予報情報取得
     */
    getWeatherApi(city: string): void {
        $.ajax(
            {
                url: 'http://api.openweathermap.org/data/2.5/forecast',
                type: 'GET',
                data: {
                    units: 'metric',
                    q: city,
                    APPID: '53f003594dcb927cacfe33d7f738a688',
                },
                dataType: 'json',
                success: function (data: any) {
                    console.log("対象の市が見つかったぞ");
                    this.props.setAjaxResponse(data.list, this.props.inputText);
                }.bind(this),
                error: function (xhr: any, status: any, err: any) {
                    console.log("対象の市が見つからぬ");
                }.bind(this)
            });
    }

    render() {
        let rows: any = [];

        // 検索文字列がある場合ajaxで通信
        if (this.props.inputText.length > 0 && this.props.inputText !== this.props.requestedCity) {
            this.getWeatherApi(this.props.inputText);
        }

        const weatherData = this.props.responseData;
        if (weatherData.length > 0) {
            weatherData.forEach(function (v: any) {
                rows.push(
                    <WeatherSearchResultRow date={v.dt_txt} temprature={v.main.temp} />
                );
            });
        }

        return (
            <table>
                <thead>
                    <tr>
                        <th>date</th>
                        <th>temprature</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default WeatherSearchResult;