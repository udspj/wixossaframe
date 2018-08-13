import 'aframe';
import 'aframe-animation-component';
import 'babel-polyfill';
import {Entity} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import tama from '../resource/tama.png';

// import store from '../store/store'

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      readme: 'Click me!',
      showreadme: false
    };
  }

  // componentDidMount() {
  //   console.log(this.context.store)
  // }

  handleClick() {
    // console.log(store.getState().attentionBoxVisible)
    if(this.state.showreadme) {
      this.setState({readme: 'About this demo:\nThis is only scene showing for battle field in Wixoss TV animation.\nYou can control the cards and put them on the desk but can not play the cards with anyone.\nClick me to close the readme.'});
    }else{
      this.setState({readme: 'Click me!'});
    }
    this.setState({showreadme: !this.state.showreadme});
  }

  render () {
    return (
      <Entity>

        <Entity geometry={{primitive: 'plane'}} 
        position={'-1.28 14.5 9.5'} 
        scale='0.5 0.5 0.5'
        rotation='0 90 0'
        material={{src: tama, side:'double', transparent:true}}
        // events={{click: () => store.dispatch({ type: 'UI_ATTENTIONBOX_TOGGLE' })}}>
        events={{click: this.handleClick.bind(this)}}>
        </Entity>

        <Entity 
        text={"value: "+this.state.readme+"; width:2; align:center;"}
        rotation='0 90 0'
        position={'-1.28 15 9.5'}>
        </Entity>

      </Entity>
    );
  }
}

export default About;
