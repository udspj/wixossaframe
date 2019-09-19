import 'aframe';
import 'babel-polyfill';
import {Entity} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './cardzone/Cards';
import CardsUsed from './cardzone/CardsUsed';
import Energy from './cardzone/Energy';
import HandCards from './cardzone/HandCards';
import Life from './cardzone/Life';
import AvatarUsed from './cardzone/AvatarUsed';
import Avatar from './cardzone/Avatar';
import Lrig from './cardzone/Lrig';
import LifeLight from './cardzone/LifeLight';
import Shiguni from './cardzone/Shiguni';
// import { mainCardsList, avatarCardsList } from './utils/maincards';

// import store from '../store/store';
// import { DECK_PUT } from '../actions';

class Desk extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  // componentDidMount() {
  //   store.dispatch( DECK_PUT('wx00', 'LIFE') )
  //   console.log(store.getState().deck.life)
  // }

  render () {
    const cardY = 14.1;
    const deskZ = 8.8;
    return (
      <Entity>

        <Entity geometry={{primitive: 'box'}}
        material={{src: this.props.texture}}
        position={{x: 0, y: 14, z: deskZ}}
        scale='3 0.1 1.8'>
        </Entity>

        <HandCards cardY={cardY} deskZ={deskZ}/>
        <Cards cardY={cardY} deskZ={deskZ}/>
        <Shiguni cardY={cardY} deskZ={deskZ}/>
        <Life cardY={cardY} deskZ={deskZ}/>
        <Lrig cardY={cardY} deskZ={deskZ}/>
        <CardsUsed cardY={cardY} deskZ={deskZ}/>
        <AvatarUsed cardY={cardY} deskZ={deskZ}/>
        <Avatar cardY={cardY} deskZ={deskZ}/>
        <Energy cardY={cardY} deskZ={deskZ}/>
        <LifeLight cardY={cardY} deskZ={deskZ}/>

      </Entity>
    );
  }
}

        // <Entity 
        // text={"value: "+store.getState().deck.drawcard+"; width:2; align:center;"}
        // rotation='0 0 0'
        // position={'0 15 9'}>
        // </Entity>

export default Desk;
