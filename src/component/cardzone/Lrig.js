import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity} from 'aframe-react';
import React from 'react';
// import ReactDOM from 'react-dom';
import slot from '../../resource/slotcard.png';
import puthere from '../../resource/puthere.png';

import store from '../../store/store';
import { avatarCardsList } from '../utils/maincards';
import { SGN_SELECTED, DECK_THROW } from '../../actions';

class Lrig extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  handlePutClick() {
    // const list = mainCardsList;
    // if(list[this.state.cardname]['type'] === 0 && zoneinfo['zone'].indexOf("SGN") != -1) {
    //   console.log("魔法卡无法放在精灵区域");
    //   return;
    // }
    // store.dispatch( HAND_SELECTED(false) );
    // store.dispatch( DECK_PUT(this.state.cardname,zoneinfo['zone']) );
    store.dispatch( {type: 'LRIG_GROW'} );
  }

  render () {
    const cardy = this.props.cardY;
    const cardz = this.props.deskZ;
    const list = avatarCardsList;
    const name = store.getState().lrig.lrig[store.getState().lrig.lrig.length-1];
    console.log(list[name]['img'])
    return (
      <Entity>

        <Entity geometry={{primitive: 'plane'}} 
        position={'0 '+cardy+' '+cardz} 
        scale='0.22 0.3 1'
        rotation='90 180 0' 
        material={{src: slot, side:'double', transparent:true}}>
        </Entity>

        <Entity geometry={{primitive: 'plane'}} 
        position={'0 '+(cardy+0.001)+' '+cardz} 
        scale='0.22 0.3 1'
        rotation='90 180 0' 
        material={{src: require('../../resource/'+list[name]['img']+'.png'), side:'double', transparent:true}}
        events={{click: () => this.handlePutClick()}}>
        </Entity>

        <Entity geometry={{primitive: 'plane'}} 
        position={0.8+' '+(cardy+0.4)+' '+(cardz)} 
        scale='0.2 0.354 1'
        rotation={'0 180 0'}
        material={{src: puthere, side:'double', transparent:true}}
        visible={true}
        events={{click: () => this.handlePutClick()}}>
        </Entity>

      </Entity>
    );
  }
}

export default Lrig;
