import 'aframe';
import 'babel-polyfill';
import {Entity} from 'aframe-react';
import React from 'react';
// import ReactDOM from 'react-dom';
import slot from '../../resource/slotcard.png';
import puthere from '../../resource/puthere.png';
import grow from '../../resource/lrig_grow.png';

import store from '../../store/store';
import { avatarCardsList } from '../utils/maincards';
import { SGN_SELECTED, DECK_THROW } from '../../actions';

class Lrig extends React.Component {
  constructor(props) {
    super(props);
  }

  handlePutClick() {
    store.dispatch( {type: 'LRIG_GROW'} );
  }

  render () {
    const cardy = this.props.cardY;
    const cardz = this.props.deskZ;
    const list = avatarCardsList;
    const name = store.getState().lrig.lrig[store.getState().lrig.lrig.length-1];
    // console.log(list[name]['img'])
    return (
      <Entity>

        <Entity geometry={{primitive: 'plane'}} 
        position={'0 '+cardy+' '+cardz} 
        scale='0.22 0.3 1'
        rotation='90 180 0' 
        material={{src: slot, side:'double', transparent:true}}>
        </Entity>

        <Entity geometry={{primitive: 'plane'}}  event-proxy="emit: animationRestart"
        position={'0 '+(cardy+0.001)+' '+cardz} 
        scale='0.22 0.3 1'
        rotation='90 180 0' 
        material={{src: require('../../resource/'+list[name]['img']+'.png'), side:'double', transparent:true}}>
        </Entity>

        <Entity geometry={{primitive: 'plane'}}
        material={{src: grow, side:'double', transparent:true}}
        position={'0 '+(cardy+0.001)+' '+cardz} 
        scale='0.22 0.3 1'
        rotation='90 180 0'>
        </Entity>

        <Entity>
          <Entity geometry={{primitive: 'plane'}}
          material={{src: grow, side:'double', transparent:true}}
          position={'0 '+(cardy+0.002)+' '+cardz} 
          scale='0.22 0.3 1'
          rotation='90 180 0' 
          animation__click={{property: 'position', startEvents: 'click', easing: 'linear', dur: 300, from:'0 '+(cardy+0.001)+' '+cardz, to: '0 '+(cardy+0.3)+' '+cardz}}
          animation__reset={{property: 'position', startEvents: 'click', easing: 'linear', delay: 300, dur: 1, to: '0 '+(cardy+0.002)+' '+cardz}}          
          events={{click: () => this.handlePutClick()}}>
          </Entity>
        </Entity>

      </Entity>
    );
  }
}

      // <a-entity>
      //   <a-entity position="2 15 -10" geometry="primitive: sphere" material="color: red"></a-entity>
      //   <a-animation begin="click" attribute="rotation" dur="1000" fill="none" to="0 300 0" repeat="0"></a-animation>
      // </a-entity>

export default Lrig;
