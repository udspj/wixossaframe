import 'aframe';
import 'babel-polyfill';
import {Entity} from 'aframe-react';
import React from 'react';
// import ReactDOM from 'react-dom';
import slot from '../../resource/slotenergy.png';
import puthere from '../../resource/puthere.png';

import store from '../../store/store';
import { mainCardsList } from '../utils/maincards';
import { ENERGY_SELECTED, DECK_THROW } from '../../actions';

class Energy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardname:''
    };
  }

  handleClick(cardname) {
    this.setState({ cardname });
    if(store.getState().deck.energyselected) {
      store.dispatch( ENERGY_SELECTED(false) );
    }else{
      store.dispatch( ENERGY_SELECTED(true) );
    }
  }

  handlePutClick() {
    store.dispatch( ENERGY_SELECTED(false) );
    store.dispatch( DECK_THROW(this.state.cardname,'ENERGY') );
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
            events={{click: () => this.handleClick(result)}}>
            </Entity>
          )
        }.bind(this))}

        <Entity geometry={{primitive: 'plane'}} 
        position={1.2+' '+(cardy+0.4)+' '+(cardz+0.5)} 
        scale='0.2 0.354 1'
        rotation={'0 90 0'}
        material={{src: puthere, side:'double', transparent:true}}
        visible={store.getState().deck.energyselected}
        events={{click: () => this.handlePutClick()}}>
        </Entity>

      </Entity>
    );
  }
}

export default Energy;
