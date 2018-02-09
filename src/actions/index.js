import axios from 'axios';

const API_KEY = '2a058f048ea95067e81bec5d17280404';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  // axios is a library solely for making AJAX requests
  // axios returns a promise after the AJAX request
    // the promise doesn't actually contain any of the data from the AJAX request
  const request = axios.get(url);

  // redux-promise manipulates actions before reducers
    // does the action have a promise as a payload?
      // No? send the original action to reducers
      // Yes? Stop the action, after promise resolves, create and send new action
        // of same type to reducers
  // tl;dr: redux-promise unpacks promise for us so we can access data we care
    // about from the request
    // also makes our code cleaner and look synchronous even though it's actually
      // asynchronous
  return {
    type: FETCH_WEATHER,
    payload: request // remember the request is a promise
  };
}
