import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity} from 'aframe-react';
import React from 'react';
// import ReactDOM from 'react-dom';
import slot from '../../resource/slotcard.png';

import store from '../../store/store';
import { mainCardsList } from '../utils/maincards';

const percard = 0.002;

class CardsUsed extends React.Component {

  renderLastCard() {
    const list = mainCardsList;
    const cardcount = store.getState().deck.useddeck.length;
    if(cardcount > 0) {
        const lastcardname = store.getState().deck.useddeck[cardcount-1];
        return <Entity geometry={{primitive: 'plane'}} 
            position={'1.2 '+(this.props.cardY+cardcount*percard+0.001)+' '+(this.props.deskZ+0.4)} 
            scale='0.2 0.28 1'
            rotation='90 180 0' 
            material={{src: require('../../resource/'+list[lastcardname]['img']+'.png'), side:'double', transparent:true}}>
            </Entity>
    }
  }

  render () {
    const cardcount = store.getState().deck.useddeck.length;
    const list = mainCardsList;
    return (
      <Entity>

        <Entity geometry={{primitive: 'plane'}} 
        position={'1.2 '+this.props.cardY+' '+(this.props.deskZ+0.4)} 
        scale='0.22 0.3 1'
        rotation='90 0 0' 
        material={{src: slot, side:'double', transparent:true}}>
        </Entity>

        <Entity geometry={{primitive: 'box'}} 
        position={'1.2 '+(this.props.cardY+cardcount*percard/2)+' '+(this.props.deskZ+0.4)} 
        scale={'0.2 '+cardcount*percard+' 0.28'}
        material={{color: '#333'}}>
        </Entity>

        {this.renderLastCard()}

      </Entity>
    );
  }
}

export default CardsUsed;
