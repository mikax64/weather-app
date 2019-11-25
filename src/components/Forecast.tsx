import React from "react";
import moment from "moment";

type ForecastProps = {
  data: any;
};
const formatDate = (date: Date) => {
  const dateFormatted = moment(date).format("dddd");
  return dateFormatted;
};

const Forecast = ({ data }: ForecastProps) => {
  return (
    <ul className="forecast_list">
      {data.slice(1, 6).map((forecast, index) => (
        <li key={index}>
          <h2 className="day">{formatDate(forecast.datetime)}</h2>
          <i className={`icon wi wi-owm-${forecast.weather.code}`}></i>
          <p className="description">{forecast.weather.description}</p>
          <p className="temperature">Max: {forecast.app_max_temp} °C</p>
          <p className="temperature">Min: {forecast.app_min_temp} °C</p>
        </li>
      ))}
    </ul>
  );
};

export default Forecast;
