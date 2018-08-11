import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity} from 'aframe-react';
import React from 'react';
// import ReactDOM from 'react-dom';
import slot from '../../resource/slotenergy.png';

import store from '../../store/store';
import { mainCardsList } from '../utils/maincards';

class Energy extends React.Component {

  handleClick(cardinfo) {
    console.log(cardinfo)
  }

  render () {
    const cardy = this.props.cardY;
    const cardz = this.props.deskZ;
    const list = mainCardsList;
    return (
      <Entity>

        <Entity geometry={{primitive: 'plane'}} 
        position={'-1.1 '+cardy+' '+(cardz-0.1)} 
        scale='0.3 1.2 1'
        rotation='90 0 0' 
        material={{src: slot, side:'double', transparent:true}}>
        </Entity>

        {store.getState().deck.energy.map(function(result, reactid) {
          return (
            <Entity key={'deckhand'+reactid} 
            geometry={{primitive: 'plane'}} 
            position={'-1.1 '+(cardy+0.001+0.001*reactid)+' '+(cardz-0.58+0.12*reactid)} 
            scale='0.2 0.28 1'
            rotation='90 -90 0' 
            material={{src: require('../../resource/'+list[result]['img']+'.png'), side:'double', transparent:true}}
            events={{click: () => this.handleClick(list[result])}}>
            </Entity>
          )
        }.bind(this))}

      </Entity>
    );
  }
}

export default Energy;
