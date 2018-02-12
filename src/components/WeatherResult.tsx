import * as React from 'react';

interface WeatherResultProps{
    value: string;
}

const WeatherResult: React.StatelessComponent<WeatherResultProps> = (props) => {
    return(
        <div>{props.value}</div>
    );
}

export default WeatherResult;