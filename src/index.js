import React from 'react';
import { render } from 'react-dom';
import Map from './Map';

class App extends React.Component {
  constructor() {
    super();
    this.state = { markerPosition: { lat: 49.8419, lng: 24.0315 } };
    this.moveMarker = this.moveMarker.bind(this);
  }

  moveMarker() {
    const { lat, lng } = this.state.markerPosition;
    this.setState({
      markerPosition: {
        lat: lat + 0.0001,
        lng: lng + 0.0001,
      }
    });
  }

  render() {
    const { markerPosition } = this.state;
    return (
      <div>
        <Map markerPosition={markerPosition} />
        <div>Current markerPosition: lat: {markerPosition.lat}, lng: {markerPosition.lng}</div>
        <button
          onClick={this.moveMarker}
        >
          Move marker
        </button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
