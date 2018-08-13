import 'aframe';
import 'aframe-animation-component';
import 'babel-polyfill';
import {Entity} from 'aframe-react';
import React from 'react';
// import ReactDOM from 'react-dom';
import slot from '../../resource/slotlife.png';
import cardbk from '../../resource/cardbk_b.png';

class Life extends React.Component {

  render () {
    const cardy = this.props.cardY;
    const cardz = this.props.deskZ;
    const life = [1,1,1,1,1,1,1];
    return (
      <Entity>

        <Entity geometry={{primitive: 'plane'}} 
        position={'0 '+cardy+' '+(cardz+0.4)} 
        scale='1.5 0.22 1'
        rotation='90 0 0' 
        material={{src: slot, side:'double', transparent:true}}>
        </Entity>

        {life.map(function(result, reactid) {
          return (
            <Entity key={'life'+reactid} 
            geometry={{primitive: 'plane'}} 
            position={(-0.6+0.18*reactid)+' '+(cardy+0.001*reactid+0.001)+' '+(cardz+0.4)} 
            scale='0.2 0.28 1'
            rotation={'90 90 0'}
            material={{src: cardbk, side:'double', transparent:true}}>
            </Entity>
          )
        })}

      </Entity>
    );
  }
}

export default Life;
