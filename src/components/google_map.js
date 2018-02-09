import React, { Component } from 'react';

export default class GoogleMap extends Component {
  // lifecycle method, function that's called after component is rendered
  componentDidMount() {
    // how to create an embedded map within an html tag
    // in this case, map is being rendered to <div ref='map'></div> below
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    // that ref tag allows this class to access this div using this.refs.map
    return <div ref='map' />
  }
}
