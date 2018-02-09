import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term : ''
    };
    // input onChange property calls this function when input changes
    // HOWEVER, event handlers are NOT bound automatically to component
    // Event handler call back functions must state which object it belongs to
      // in this case, the function belongs to THIS object
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault(); // prevent browser from submitting form
    // now go fetch weather data
    this.props.fetchWeather(this.state.term);
    // reset to empty string on search term
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input
          value={this.state.term}
          onChange={this.onInputChange}
          className='form-control'
          placeholder='Get a five day forecast in your favorite cities'/>
        <span className='input-group-btn'>
          <button
            type='submit'
            className='btn btn-secondary'>Submit
          </button>
        </span>
      </form>
    );
  }
}

// function to map actions to props and dispatch to all reducers
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// null first argument since mapDispatchToProps is always the 2nd argument
export default connect(null, mapDispatchToProps)(SearchBar);
