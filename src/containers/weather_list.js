import React, { Component } from 'react';
import { connect } from 'react-redux';
import CityChart from '../components/city_chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData){
    const name = cityData.city.name;
    // map used to take cityData array to just numbers usable for Sparklines
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);

    const { lon, lat } = cityData.city.coord; // ES6 syntax sugar
    // equivalent to below...
    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td><CityChart data={temps} color='orange' units='K' /></td>
        <td><CityChart data={pressure} color='blue' units='hPa' /></td>
        <td><CityChart data={humidity} color='green' units='%' /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className='table table-hover table-responsive-sm'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// function mapStateToProps(state) {
//   return { weather: state.weather };
// }

// ES6 syntax sugar, same as above
// mapStateToProps used to take weather data from redux
function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
