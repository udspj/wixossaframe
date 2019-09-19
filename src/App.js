import 'aframe';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
// import ReactDOM from 'react-dom';
import MoveBoxes from './component/MoveBoxes';
import Desk from './component/Desk';
import Character from './component/Character';
import Coins from './component/Coins';
import About from './component/About';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: 'red'};
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }


  render () {
    return (
      <Scene>
        <a-assets>
          <img id="groundTexture" src={require('./resource/floor.jpg')} alt=''/>
          <img id="skyTexture" src={require('./resource/sky.jpg')} alt=''/>
          <img id="deskTexture" src={require('./resource/desk.jpg')} alt=''/>
        </a-assets>

        <MoveBoxes center={{x: 0, y: 15, z: 10}} width={6}/>
        <Entity key='standbox'
                geometry={{primitive: 'box'}}
                material={{src: require('./resource/box7.jpg')}}
                position={{x: 0, y: 9, z: 10}}
                scale='5 5 5'>
        </Entity>
        <Desk texture="#deskTexture"/>
        <Character center={{x: 0, y: 14, z: 10.2}}/>
        <Coins center={{x: 0, y: 15, z: 11}} amount={0}/>
        <About />

        <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>
        <a-entity id="#rig" position="0 13.8 10">
          <Entity primitive="a-camera">
            <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
          </Entity>
        </a-entity>
      </Scene>
    );
  }
}
        // <a-entity daydream-controls></a-entity>

export default App;
