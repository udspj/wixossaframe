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

class Shiguni extends React.Component {

  handleClick() {
  }

  renderSGNleft(y, z) {
    if(store.getState().deck.sgnleft.length > 0) {
      const list = mainCardsList;
      const cardname = store.getState().deck.sgnleft[0];
      return <Entity geometry={{primitive: 'plane'}} 
            position={'-0.5 '+(this.props.cardY+0.001)+' '+(this.props.deskZ-0.2)} 
            scale='0.22 0.3 1'
            rotation='90 0 0' 
            material={{src: require('../../resource/'+list[cardname]['img']+'.png'), side:'double', transparent:true}}
            events={{click: () => this.handleClick()}}>
            </Entity>
    }
  }

  renderSGNcenter(y, z) {
    if(store.getState().deck.sgncenter.length > 0) {
      const list = mainCardsList;
      const cardname = store.getState().deck.sgncenter[0];
      return <Entity geometry={{primitive: 'plane'}} 
            position={'0 '+this.props.cardY+' '+(this.props.deskZ-0.5)} 
            scale='0.22 0.3 1'
            rotation='90 0 0' 
            material={{src: require('../../resource/'+list[cardname]['img']+'.png'), side:'double', transparent:true}}
            events={{click: () => this.handleClick()}}>
            </Entity>
    }
  }

  renderSGNright(y, z) {
    if(store.getState().deck.sgnright.length > 0) {
      const list = mainCardsList;
      const cardname = store.getState().deck.sgnright[0];
      return <Entity geometry={{primitive: 'plane'}} 
            position={'0.5 '+this.props.cardY+' '+(this.props.deskZ-0.2)} 
            scale='0.22 0.3 1'
            rotation='90 0 0' 
            material={{src: require('../../resource/'+list[cardname]['img']+'.png'), side:'double', transparent:true}}
            events={{click: () => this.handleClick()}}>
            </Entity>
    }
  }

  render () {
    return (
      <Entity>

        <Entity geometry={{primitive: 'plane'}} 
        position={'-0.5 '+this.props.cardY+' '+(this.props.deskZ-0.2)} 
        scale='0.22 0.3 1'
        rotation='90 0 0' 
        material={{src: slot, side:'double', transparent:true}}>
        </Entity>

        <Entity geometry={{primitive: 'plane'}} 
        position={'0 '+this.props.cardY+' '+(this.props.deskZ-0.5)} 
        scale='0.22 0.3 1'
        rotation='90 0 0' 
        material={{src: slot, side:'double', transparent:true}}>
        </Entity>

        <Entity geometry={{primitive: 'plane'}} 
        position={'0.5 '+this.props.cardY+' '+(this.props.deskZ-0.2)} 
        scale='0.22 0.3 1'
        rotation='90 0 0' 
        material={{src: slot, side:'double', transparent:true}}>
        </Entity>

        { this.renderSGNleft(this.props.cardY, this.props.deskZ) }

        { this.renderSGNcenter(this.props.cardY, this.props.deskZ) }

        { this.renderSGNright(this.props.cardY, this.props.deskZ) }

      </Entity>
    );
  }
}

export default Shiguni;
