import 'aframe';
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
      readme: 'About this demo:\nIf you are using VR on mobile,please enable the WebVR feature in chrome://flags.\nThis is only scene showing for Wixoss battlefield.You cannot battle with anyone.\n\nHow to control cards:\n1. Gaze the top of deck to draw card.\n2. Gaze the card on the desk and gaze one arrow to put card on one zone.\n3. Gaze the LRIG to grow.\n(on normal webpage, gaze will be click)\n\nGaze me to close the readme.',
      showreadme: false,
      readme_y: 15.38
    };
  }

  // componentDidMount() {
  //   console.log(this.context.store)
  // }

  handleClick() {
    // console.log(store.getState().attentionBoxVisible)
    if(this.state.showreadme) {
      this.setState({readme: 'About this demo:\nIf you are using VR on mobile,please enable the WebVR feature in chrome://flags.\nThis is only scene showing for Wixoss battlefield.You cannot battle with anyone.\n\nHow to control cards:\n1. Gaze the top of deck to draw card.\n2. Gaze the card on the desk and gaze one arrow to put card on one zone.\n3. Gaze the LRIG to grow.\n(on normal webpage, gaze will be click)\n\nGaze me to close the readme.'});
      this.setState({readme_y: 15.38});
    }else{
      this.setState({readme: 'Gaze me!'});
      this.setState({readme_y: 14.8});
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
        text={"value: "+this.state.readme+"; width:2; align:center; color:#cc9933"}
        rotation='0 90 0'
        position={'-1.28 '+this.state.readme_y+' 9.5'}>
        </Entity>

      </Entity>
    );
  }
}

export default About;
