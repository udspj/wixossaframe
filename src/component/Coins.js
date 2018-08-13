import 'aframe';
import 'babel-polyfill';
import {Entity} from 'aframe-react';
import React from 'react';

import store from '../store/store';

class Coins extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     coins: [0,0,0,0,0],
  //     isupdated: false
  //   };
  // }

  // componentDidMount() {
  //   this.setState({isupdated:true});
  //   console.log(this.state.isupdated)
  // }

  addCoins(amount) {
    // if (!this.state.isupdated) {
    //   return
    // }
    // console.log(this.state.isupdated)
    // console.log(this.state.coins)
    var coins = [0,0,0,0,0];//this.state.coins;
    const count = coins.length;
    const mid = Math.floor(count/2);
    var value = 1;
    for (var i = 0; i < amount; i++) {
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
    // this.setState({coins});
    return coins;
  }

  render () {
    const coins = this.addCoins(store.getState().lrig.coin);
    // const center = this.props.center;
    const startx = coins.length/2+(Math.ceil(coins.length/2)-1)*0.2-0.5;
    return (
      <Entity>

        {coins.map(function(result, reactid) {
          var coinimg = 'coin';
          if(result === 0) {
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
