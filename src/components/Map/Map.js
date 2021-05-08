import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 23.68,
      lng: 90.35
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{margin:'auto', height:'500px',marginTop:'30px', width: '80%' }}>
        <GoogleMapReact
       
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={23.68}
            lng={90.35}
            text="Bd"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;