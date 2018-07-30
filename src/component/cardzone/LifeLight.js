import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity} from 'aframe-react';
import React from 'react';
// import ReactDOM from 'react-dom';

class LifeLight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lights: []
    };
  }

  componentDidMount() {
    const perangle = 360/8;
    const radius = 0.3;
    var lights = [];
    for (var i = 7; i >= 1; i--) {
      const x = Math.sin(2*Math.PI/360*(perangle*i))*radius;
      const z = Math.cos(2*Math.PI/360*(perangle*i))*radius;
      lights.push({"x":x,"z":z});
    }
    console.log(lights)
    this.setState( { lights:lights } );
  }

  render () {
    const cardy = this.props.cardY;
    const cardz = this.props.deskZ;
    return (
      <Entity>

        {this.state.lights.map(function(result, reactid) {
          return (
            <Entity geometry={{primitive: 'sphere'}} 
            position={result.x+' '+cardy+' '+(cardz+result.z)} 
            scale='0.02 0.02 0.02'
            material={{color:'#fefbaa'}}>
            </Entity>
          )
        })}

      </Entity>
    );
  }
}

export default LifeLight;
