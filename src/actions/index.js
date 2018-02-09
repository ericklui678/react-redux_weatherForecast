import axios from 'axios';

const API_KEY = '2a058f048ea95067e81bec5d17280404';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

// http://samples.openweathermap.org/data/2.5/forecast?appid=b6907d289e10d714a6e88b30761fae22&q=London,us

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  // axios is a library solely for making AJAX requests
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
