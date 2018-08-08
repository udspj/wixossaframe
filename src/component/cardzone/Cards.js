import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity} from 'aframe-react';
import React from 'react';
// import ReactDOM from 'react-dom';
import slot from '../../resource/slotcard.png';
import cardbk from '../../resource/cardbk_b.png';
import store from '../../store/store'

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
        position={'1.1 '+this.props.cardY+' '+(this.props.deskZ-0.5)} 
        scale='0.22 0.3 1'
        rotation='90 0 0' 
        material={{src: slot, side:'double', transparent:true}}>
        </Entity>

        <Entity geometry={{primitive: 'box'}} 
        position={'1.1 '+(this.props.cardY+0.05)+' '+(this.props.deskZ-0.5)} 
        scale='0.2 0.1 0.28'
        material={{color: '#333'}}>
        </Entity>

        <Entity geometry={{primitive: 'plane'}} 
        position={'1.1 '+(this.props.cardY+0.1+0.001)+' '+(this.props.deskZ-0.5)} 
        scale='0.2 0.28 1'
        rotation='90 180 0' 
        material={{src: cardbk, side:'double', transparent:true}}
        events={{click: () => store.dispatch({ type: 'DECK_DRAW' })}}>
        </Entity>

      </Entity>
    );
  }
}

export default Cards;
