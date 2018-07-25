import 'aframe';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity} from 'aframe-react';
import React from 'react';

class Character extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     center: {x:0, y:0, z:0}
  //   };
  // }

  // componentDidMount() {
  //   this.setState({center: this.props.center});
  // }


        // <Entity geometry={{primitive: 'plane'}} position={(-0.5+center.x)+" "+center.y+" "+center.z} rotation="0 -90 0" material={{src: require('../resource/box2.jpg')}}></Entity>
        // <Entity geometry={{primitive: 'plane'}} position={(0.5+center.x)+" "+center.y+" "+center.z} rotation="0 90 0" material={{src: require('../resource/box2.jpg')}}></Entity>
        // <Entity geometry={{primitive: 'plane'}} position={center.x+" "+(0.5+center.y)+" "+center.z} scale='1 0.01 1' rotation="-90 0 0" material={{src: require('../resource/box2.jpg')}}></Entity>
        // <Entity geometry={{primitive: 'plane'}} position={center.x+" "+(-0.5+center.y)+" "+center.z} scale='1 0.01 1' rotation="90 0 0" material={{src: require('../resource/box2.jpg')}}></Entity>

  // 左 右 上 下 后 前

  render () {
    const center = this.props.center;
    return (
      <Entity>

        <Entity geometry={{primitive: 'plane'}} position={center.x+" "+center.y+" "+(0.005+center.z)} scale='1 2.57 1' rotation="0 0 0" material={{src: require('../resource/suzukobk.png'), side:'double', transparent:true}}></Entity>
        <Entity geometry={{primitive: 'plane'}} position={center.x+" "+center.y+" "+(-0.005+center.z)} scale='1 2.57 1' rotation="0 0 0" material={{src: require('../resource/suzuko.png'), side:'double', transparent:true}}></Entity>

      </Entity>
    );
  }
}

export default Character;
