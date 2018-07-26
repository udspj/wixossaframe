import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
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

class Desk extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render () {
    const cardY = 14.1;
    return (
      <Entity>

        <Entity geometry={{primitive: 'box'}}
        material={{src: this.props.texture}}
        position={{x: 0, y: 14, z: 9}}
        scale='3 0.1 1.5'>
        </Entity>

        <HandCards cardY={cardY}/>
        <Cards cardY={cardY}/>

      </Entity>
    );
  }
}

export default Desk;
