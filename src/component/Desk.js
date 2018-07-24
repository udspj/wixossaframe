import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

class Desk extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render () {
    return (
      <Entity>

            <Entity geometry={{primitive: 'box'}}
            material={{src: this.props.texture}}
            position={{x: 0, y: 14, z: 9}}
            scale='3 0.1 1.5'>
            </Entity>

      </Entity>
    );
  }
}

export default Desk;
