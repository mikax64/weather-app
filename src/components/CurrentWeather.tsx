import React from "react";
import moment from "moment";

type CurrentWeatherProps = {
  data: any;
};

export const CurrentWeather = ({ data }: CurrentWeatherProps) => {
  const dateFormatted = moment(data.ob_time).format("D MMMM YYYY");
  return (
    <div className="currentWeather">
      <h1 className="city">
        {data.city_name}, {data.country_code}
      </h1>
      <p className="date">{dateFormatted}</p>
      <div className="wrapperInfos">
        <div className="temperature">
          <span className="temperature_value">{data.app_temp}</span>
          <span className="temperature_celsius">°C</span>
        </div>
        <i className={`icon wi wi-owm-${data.weather.code}`}></i>
      </div>

      <p className="description">{data.weather.description}</p>
    </div>
  );
};
