import 'aframe';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity} from 'aframe-react';
import React from 'react';
// import ReactDOM from 'react-dom';
import slot from '../../resource/slotcard.png';
import puthere from '../../resource/puthere.png';

import store from '../../store/store';
import { mainCardsList } from '../utils/maincards';
import { SGN_SELECTED, DECK_THROW } from '../../actions';

class Shiguni extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardname:'',
      zone:''
    };
  }

  handleClick(cardname,zone) {
    this.setState({ cardname, zone });
    if(store.getState().deck.sgnselected) {
      store.dispatch( SGN_SELECTED(false) );
    }else{
      store.dispatch( SGN_SELECTED(true) );
    }
  }

  handlePutClick() {
    store.dispatch( SGN_SELECTED(false) );
    store.dispatch( DECK_THROW(this.state.cardname,this.state.zone) );
  }

  renderSGNleft(y, z) {
    if(store.getState().deck.sgnleft.length > 0) {
      const list = mainCardsList;
      const cardname = store.getState().deck.sgnleft[0];
      return <Entity geometry={{primitive: 'plane'}} 
            position={'-0.5 '+(this.props.cardY+0.001)+' '+(this.props.deskZ-0.2)} 
            scale='0.22 0.3 1'
            rotation='90 180 0' 
            material={{src: require('../../resource/'+list[cardname]['img']+'.png'), side:'double', transparent:true}}
            events={{click: () => this.handleClick(cardname,'SGNLEFT')}}>
            </Entity>
    }
  }

  renderSGNcenter(y, z) {
    if(store.getState().deck.sgncenter.length > 0) {
      const list = mainCardsList;
      const cardname = store.getState().deck.sgncenter[0];
      return <Entity geometry={{primitive: 'plane'}} 
            position={'0 '+(this.props.cardY+0.001)+' '+(this.props.deskZ-0.5)} 
            scale='0.22 0.3 1'
            rotation='90 180 0' 
            material={{src: require('../../resource/'+list[cardname]['img']+'.png'), side:'double', transparent:true}}
            events={{click: () => this.handleClick(cardname,'SGNCENTER')}}>
            </Entity>
    }
  }

  renderSGNright(y, z) {
    if(store.getState().deck.sgnright.length > 0) {
      const list = mainCardsList;
      const cardname = store.getState().deck.sgnright[0];
      return <Entity geometry={{primitive: 'plane'}} 
            position={'0.5 '+(this.props.cardY+0.001)+' '+(this.props.deskZ-0.2)} 
            scale='0.22 0.3 1'
            rotation='90 180 0' 
            material={{src: require('../../resource/'+list[cardname]['img']+'.png'), side:'double', transparent:true}}
            events={{click: () => this.handleClick(cardname,'SGNRIGHT')}}>
            </Entity>
    }
  }

  render () {
    const cardy = this.props.cardY;
    const cardz = this.props.deskZ;
    return (
      <Entity>

        <Entity geometry={{primitive: 'plane'}} 
        position={'-0.5 '+cardy+' '+(cardz-0.2)} 
        scale='0.22 0.3 1'
        rotation='90 0 0' 
        material={{src: slot, side:'double', transparent:true}}>
        </Entity>

        <Entity geometry={{primitive: 'plane'}} 
        position={'0 '+cardy+' '+(cardz-0.5)} 
        scale='0.22 0.3 1'
        rotation='90 0 0' 
        material={{src: slot, side:'double', transparent:true}}>
        </Entity>

        <Entity geometry={{primitive: 'plane'}} 
        position={'0.5 '+cardy+' '+(cardz-0.2)} 
        scale='0.22 0.3 1'
        rotation='90 0 0' 
        material={{src: slot, side:'double', transparent:true}}>
        </Entity>

        { this.renderSGNleft(cardy, cardz) }

        { this.renderSGNcenter(cardy, cardz) }

        { this.renderSGNright(cardy, cardz) }

        <Entity geometry={{primitive: 'plane'}} 
        position={1.2+' '+(cardy+0.4)+' '+(cardz+0.5)} 
        scale='0.2 0.354 1'
        rotation={'0 90 0'}
        material={{src: puthere, side:'double', transparent:true}}
        visible={store.getState().deck.sgnselected}
        events={{click: () => this.handlePutClick()}}>
        </Entity>

      </Entity>
    );
  }
}

export default Shiguni;
