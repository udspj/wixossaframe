import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity} from 'aframe-react';
import React from 'react';
// import ReactDOM from 'react-dom';
import slot from '../../resource/slothandcard.png';

import store from '../../store/store';
import { mainCardsList } from '../utils/maincards';

class HandCards extends React.Component {

  render () {
    const cardy = this.props.cardY;
    const cardz = this.props.deskZ;
    const list = mainCardsList;
    return (
      <Entity>

        <Entity geometry={{primitive: 'plane'}} 
        position={'0 '+cardy+' '+(cardz+0.7)} 
        scale='2 0.3 1'
        rotation='90 0 0' 
        material={{src: slot, side:'double', transparent:true}}>
        </Entity>

        {store.getState().deck.hand.map(function(result, reactid) {
          return (
            <Entity geometry={{primitive: 'plane'}} 
            position={-0.88+0.22*reactid+' '+(cardy+0.001)+' '+(cardz+0.7)} 
            scale='0.2 0.28 1'
            rotation='90 180 0' 
            material={{src: require('../../resource/'+list[result]['img']+'.png'), side:'double', transparent:true}}>
            </Entity>
          )
        })}

      </Entity>
    );
  }
}

export default HandCards;
