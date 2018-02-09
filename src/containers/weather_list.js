import React, { Component } from 'react';
import { connect } from 'react-redux';
import CityChart from '../components/city_chart';

class WeatherList extends Component {
  renderWeather(cityData){
    const name = cityData.city.name;
    // map used to take cityData array to just numbers usable for Sparklines
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><CityChart data={temps} color='orange' /></td>
        <td><CityChart data={pressure} color='blue' /></td>
        <td><CityChart data={humidity} color='green' /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className='table table-hover table-responsive-sm'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
