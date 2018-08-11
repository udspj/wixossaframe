import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity} from 'aframe-react';
import React from 'react';
// import ReactDOM from 'react-dom';
import slot from '../../resource/slothandcard.png';
import puthere from '../../resource/puthere.png';

import store from '../../store/store';
import { mainCardsList } from '../utils/maincards';
import { HAND_SELECTED } from '../../actions';

class HandCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tamavisible: 'false',
      cardinfo:{}
    };
  }

  handleClick(cardinfo) {
    this.setState({ cardinfo });
    if(this.state.tamavisible === 'true') {
      this.setState({ tamavisible:'false' });
      store.dispatch( HAND_SELECTED(false) );
    }else{
      this.setState({ tamavisible:'true' });
      store.dispatch( HAND_SELECTED(true) );
    }
  }

  handlePutClick(zoneinfo) {

  }

  render () {
    const cardy = this.props.cardY;
    const cardz = this.props.deskZ;
    const list = mainCardsList;
    const putlist = [{'zone':'ENERGY','x':-1,'y':cardy,'z':cardz-0.5,'ry':180},
                     {'zone':'SGNLEFT','x':-0.4,'y':cardy,'z':cardz-0.15,'ry':180},
                     {'zone':'SGNCENTER','x':-0,'y':cardy,'z':cardz-0.5,'ry':180},
                     {'zone':'SGNRIGHT','x':0.4,'y':cardy,'z':cardz-0.15,'ry':180},
                     // {'zone':'life','x':-0.5,'y':cardy,'z':cardz+0.4,'ry':180},
                     {'zone':'USEDDECK','x':1.2,'y':cardy,'z':cardz+0.5,'ry':90}];
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
            <Entity key={'deckhand'+reactid} 
            geometry={{primitive: 'plane'}} 
            position={-0.88+0.22*reactid+' '+(cardy+0.001)+' '+(cardz+0.7)} 
            scale='0.2 0.28 1'
            rotation='90 180 0' 
            material={{src: require('../../resource/'+list[result]['img']+'.png'), side:'double', transparent:true}}
            events={{click: () => this.handleClick(list[result])}}>
            </Entity>
          )
        }.bind(this))}

        {putlist.map(function(result, reactid) {
          return (
            <Entity key={'putlist'+reactid} 
            geometry={{primitive: 'plane'}} 
            position={result.x+' '+(result.y+0.4)+' '+result.z} 
            scale='0.2 0.354 1'
            rotation={'0 '+result.ry+' 0'}
            material={{src: puthere, side:'double', transparent:true}}
            visible={this.state.tamavisible}
            events={{click: () => this.handlePutClick(putlist[reactid])}}>
            </Entity>
          )
        }.bind(this))}

      </Entity>
    );
  }
}

        // <Entity geometry={{primitive: 'plane'}}
        // material={{color: 'red', side:'double', opacity:'0'}}
        // position={{x: 0, y: 14.2, z: cardz}}
        // scale='3 1.8 0.1'
        // rotation='90 0 0'>
        // </Entity>

export default HandCards;
