import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

class MoveBoxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: []
    };
  }

  componentDidMount() {
    const centerpos = this.props.center;
    const hw = this.props.width;

    const basepos = [{x: 0, y: hw, z: 0},{x: hw, y: hw, z: -hw},{x: -hw, y: hw, z: hw},{x: hw, y: hw, z: hw},{x: -hw, y: hw, z: -hw},
                     {x: hw, y: hw, z: 0},{x: 0, y: hw, z: -hw},{x: -hw, y: hw, z: 0},{x: 0, y: hw, z: hw},
                     {x: hw, y: 0, z: hw},{x: -hw, y: 0, z: hw},{x: -hw, y: 0, z: -hw},{x: hw, y: 0, z: -hw},
                     {x: hw, y: 0, z: 0},{x: -hw, y: 0, z: 0},{x: 0, y: 0, z: hw},
                     {x: hw, y: -hw, z: -hw},{x: -hw, y: -hw, z: hw},{x: hw, y: -hw, z: hw},{x: -hw, y: -hw, z: -hw},
                     {x: 0, y: -hw, z: -hw},{x: 0, y: -hw, z: hw},{x: hw, y: -hw, z: 0},{x: -hw, y: -hw, z: 0}]
    const boxex = basepos.map(function(res) {
      var box = {"imgurl":Math.ceil(Math.random()*9)};
      box["x"] = res.x + centerpos.x + (Math.random() * 2 - 1);
      box["y"] = res.y + centerpos.y + (Math.random() * 2 - 1);
      box["z"] = res.z + centerpos.z + (Math.random() * 2 - 1);
      box["size"] = Math.random() * 2 + 1;
      box["speed"] = Math.random() * 1 + 1;
      const whichmove = ["xm","ym","zm"];
      const whichm = whichmove[Math.ceil(Math.random()*3-1)];
      box["xm"] = 0;
      box["ym"] = 0;
      box["zm"] = 0;
      const whichrange = [(Math.random() - 2), (Math.random() + 1)];
      box[whichm] = whichrange[Math.ceil(Math.random()*2-1)];
      return box;
    })
    this.setState( { boxes:boxex } );
  }

  render () {
    return (
      <Entity>

        {this.state.boxes.map(function(result, reactid) {
          return (
            <Entity key={'Marker'+reactid}
            geometry={{primitive: 'box'}}
            material={{src: require('../resource/box'+result.imgurl+'.jpg')}}
            animation={{property: 'position', easing: 'linear', dir: 'alternate', dur: result.speed*10000, loop: true, to: (result.xm+result.x)+" "+(result.ym+result.y)+" "+(result.zm+result.z)}}
            position={{x: result.x, y: result.y, z: result.z}}
            scale={result.size+" "+result.size+" "+result.size}>
            </Entity>
          )
        })}

      </Entity>
    );
  }
}

export default MoveBoxes;
