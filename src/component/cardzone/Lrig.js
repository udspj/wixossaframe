import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity} from 'aframe-react';
import React from 'react';
// import ReactDOM from 'react-dom';
import slot from '../../resource/lrigslot.png';

class Lrig extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render () {
    return (
      <Entity>

        <Entity geometry={{primitive: 'plane'}} 
        position={'0 '+this.props.cardY+' '+(this.props.deskZ)} 
        scale='0.22 0.3 1'
        rotation='90 180 0' 
        material={{src: slot, side:'double', transparent:true}}>
        </Entity>

      </Entity>
    );
  }
}

export default Lrig;
