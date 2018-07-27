import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity} from 'aframe-react';
import React from 'react';
// import ReactDOM from 'react-dom';

class Shiguni extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render () {
    return (
      <Entity>

        <Entity geometry={{primitive: 'plane'}} 
        position={'-0.5 '+this.props.cardY+' '+(this.props.deskZ-0.2)} 
        scale='0.22 0.3 1'
        rotation='90 0 0' 
        material={{src: require('../../resource/slotcard.png'), side:'double', transparent:true}}>
        </Entity>

        <Entity geometry={{primitive: 'plane'}} 
        position={'0 '+this.props.cardY+' '+(this.props.deskZ-0.5)} 
        scale='0.22 0.3 1'
        rotation='90 0 0' 
        material={{src: require('../../resource/slotcard.png'), side:'double', transparent:true}}>
        </Entity>

        <Entity geometry={{primitive: 'plane'}} 
        position={'0.5 '+this.props.cardY+' '+(this.props.deskZ-0.2)} 
        scale='0.22 0.3 1'
        rotation='90 0 0' 
        material={{src: require('../../resource/slotcard.png'), side:'double', transparent:true}}>
        </Entity>

      </Entity>
    );
  }
}

export default Shiguni;
