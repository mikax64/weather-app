import React, { Component } from "react";
import { CurrentWeather } from "./CurrentWeather";
import Forecast from "./Forecast";

type WeatherWidgetState = {
  searchValue: string;
  errorSearch: string;
  dataCurrentWeather: any;
  dataForecast: any;
  successRequestAPI: boolean;
};

export class WeatherWidget extends Component<{}, WeatherWidgetState> {
  state = {
    errorSearch: "",
    dataCurrentWeather: {},
    dataForecast: {},
    searchValue: "",
    successRequestAPI: false
  };
  handleOnChange = event => {
    event.preventDefault();
    this.setState({
      searchValue: event.target.value,
      errorSearch: ""
    });
  };

  handleOnSubmit = async event => {
    try {
      event.preventDefault();
      const query = this.state.searchValue;
      const API_KEY = "9c4a6808ce314d688fa298ef698eed7b";

      const responseCurrentWeather = await fetch(
        `http://api.weatherbit.io/v2.0/current?city=${query}&key=${API_KEY}`
      );
      const dataCurrentWeather = await responseCurrentWeather.json();
      const responseForecast = await fetch(
        `https://api.weatherbit.io/v2.0/forecast/daily?city=${query}&key=${API_KEY}`
      );
      const dataForecast = await responseForecast.json();

      this.setState({
        errorSearch: "",
        dataCurrentWeather: dataCurrentWeather.data[0],
        dataForecast: dataForecast.data,
        successRequestAPI: true
      });
    } catch (e) {
      this.setState({ errorSearch: "City unknown", successRequestAPI: false });
    }
  };
  render() {
    const {
      dataCurrentWeather,
      dataForecast,
      errorSearch,
      searchValue,
      successRequestAPI
    } = this.state;

    return (
      <>
        <form className="searchForm" onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            placeholder="Search a city..."
            name="city"
            onChange={this.handleOnChange}
            value={searchValue}
          />
          <button disabled={searchValue.length < 2} type="submit">
            Search
          </button>
        </form>
        {searchValue.length < 2 && (
          <p className="enterLetter">Enter at least 2 letters</p>
        )}
        {errorSearch && <p className="errorSearch">{errorSearch}</p>}

        {successRequestAPI && (
          <div className="wrapperResult">
            <CurrentWeather data={dataCurrentWeather} />
            <Forecast data={dataForecast} />
          </div>
        )}
      </>
    );
  }
}

export default WeatherWidget;
