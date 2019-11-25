## 1) INSTALL PACKAGES

in the terminal command , enter the following command :
npm install

## 2) LAUNCH THE APPLICATION

in the terminal command , enter the following command :
npm start

In your browser, enter the url : http://localhost:3000/

## 3) RUN THE TESTS

in the terminal command , enter the following command :
npm test

##### MY FEEDBACK

For this project, I decided to use "create-react-app" to set up quickly a good environment of development.
I've added the support of typescript for the type checking of codingand Sass for css styles which allow to gain speed
First at all, I thought about the UX of the application to have an overview of features required.
I decided to create a main component named WidgetWeather which manage the state of the search to make API calls. It displays as well the others components which handle the views of the result API call.
I didn't want to create a component dedicated for the search form because it would add complexity to pass props to others components.

About the API, I chose weatherbit.io/ because it provides current weather data and 16 days forecast.
Once the call API is successful, I display the components CurrentWeather and Forecast, to be sure they are only displayed when data are available.
They are presentionnal components , so they don't have any logic inside.

After, I did some tests with Jest & Enzyme to check for example if the input search update well the state of component.

Once all features were done, I designed the app and did the styles. I took the icons you suggested for all weather icons because it was compatible with the weather code from API.

To finish, I would say this project was interesting! and it took me about one day of work (7-8 hours). The most long was to find the good API and create the styles. For the rest it was rather speed.
