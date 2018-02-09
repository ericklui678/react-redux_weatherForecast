import { FETCH_WEATHER } from '../actions/index';

// remember that the point of the program is to have list of weathers
  // from different regions which is stored in an array
// we don't want to replace state with just one city, but add on to the array
  // state.push IS A TRAP, never make state = to something, ALWAYS use setState
// ALWAYS RETURN A FRESH NEW STATE
export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    // concat is useful since it returns a NEW array that contains the new city
    // push MUTATES the current array, DO NOT USE THIS FOR STATE

    // return state.concat([action.payload.data]); this works too!
    return [ action.payload.data, ...state ]; // ES6 syntax sugar, same as above
  }
  return state;
}
