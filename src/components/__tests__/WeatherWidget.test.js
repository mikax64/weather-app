import React from "react";

import { mount, shallow } from "enzyme";
import { WeatherWidget } from "../WeatherWidget";

it("render component without crashing", () => {
  shallow(<WeatherWidget />);
});

it("search input work", () => {
  const component = mount(<WeatherWidget />);
  const input = component.find("input").at(0);

  input.instance().value = "chicago";
  input.simulate("change");

  expect(component.state().searchValue).toEqual("chicago");
});

it("button is disabled with less than 2 letters on input", () => {
  const component = mount(<WeatherWidget />);
  const input = component.find("input").at(0);
  const button = component.find("button").at(0);

  input.instance().value = "c";
  input.simulate("change");

  expect(button.instance().disabled).toBe(true);
});
