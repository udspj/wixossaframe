import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render () {
    return (
      <Entity>

        <Entity geometry={{primitive: 'plane'}} 
        position={'1.1 '+this.props.cardY+' 8.8'} 
        scale='0.22 0.3 1'
        rotation='90 0 0' 
        material={{src: require('../../resource/slotcard.png'), side:'double', transparent:true}}></Entity>

      </Entity>
    );
  }
}

export default Cards;
