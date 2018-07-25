import 'aframe';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity} from 'aframe-react';
import React from 'react';

class Coins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: [0,0,0,0,0]
    };
  }

  componentDidMount() {
    var coins = this.state.coins;
    const count = coins.length;
    const mid = Math.floor(count/2);
    var value = 1;
    for (var i = 0; i < this.props.amount; i++) {
      if(i === 0) {
        coins[mid] = 1;
        continue;
      }
      if(i % 2 > 0) {
        coins[mid - value] = 1;
      }else{
        coins[mid + value] = 1;
        value++;
      }
    }
    this.setState({coins});
  }

  render () {
    const center = this.props.center;
    const startx = this.state.coins.length/2+(Math.ceil(this.state.coins.length/2)-1)*0.2-0.5;
    return (
      <Entity>

        {this.state.coins.map(function(result, reactid) {
          var coinimg = 'coin';
          if(result == 0) {
            coinimg = 'coinno';
          }
          return (
            <Entity key={'Marker'+reactid} 
            geometry={{primitive: 'plane'}} 
            position={(1.2*reactid-startx)+" 17 12"}
            scale='1 1.41 1'
            material={{src: require('../resource/'+coinimg+'.png'), side:'double', transparent:true}}>
            </Entity>
          )
        })}

      </Entity>
    );
  }
}

export default Coins;
