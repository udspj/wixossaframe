import * as ActionTypes from '../actions'
import { mainCardsList, avatarCardsList } from '../component/utils/maincards'

const initDeck = () => {
    var deck = [];
    for (let key of Object.keys(mainCardsList)) {
      for (var i = mainCardsList[key]['amount']; i >= 1; i--) {
        deck.push(key);
      }
    }
    return deck;
}

const drawCard = () => {
    return "wx00";
}

const initState = {
  maindeck: initDeck()
}

const deck =  (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.DECK_SHUFFLE:
      return { ...state, attentionBoxVisible: !state.attentionBoxVisible }
    case ActionTypes.DECK_DRAW:
      return { ...state, drawcard: drawCard() }
    default: return state
  }
}

export default deck;