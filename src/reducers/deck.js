import * as ActionTypes from '../actions'
import { mainCardsList, avatarCardsList } from '../component/utils/maincards'

const initDeck = () => {
    var deck = [];
    for (let key of Object.keys(mainCardsList)) {
      for (var i = mainCardsList[key]['amount']; i >= 1; i--) {
        deck.push(key);
      }
    }
    return washDeck(deck);
}

const washDeck = (decklist) => {
	var arr = decklist;
	let n = arr.length, random;
    while(0!=n){
        random =  (Math.random() * n--) >>> 0;
        [arr[n], arr[random]] = [arr[random], arr[n]];
    }
    return arr;
}

const drawCard = (decklist) => {
	var card = decklist[0];
    return card;
}

const drawFromDeck = (decklist) => {
	decklist.splice(0,1);
	return decklist;
}

const throwCard = (useddeck, cardname) => {
	useddeck.push(cardname);
	return useddeck;
}

const discardBacktoMaindeck = (useddeck, maindeck) => {
	let newdeck = maindeck;
	newdeck.push.apply( newdeck, useddeck );
	return washDeck(newdeck);
}

const initState = {
	maindeck: initDeck(),
	drawcard: "",
	useddeck: [],
	hand: [],
	life: [],
	energy: [],
	sgnleft: "",
	sgncenter: "",
	sgnright: ""
}

const deck =  (state = initState, action) => {
	console.log(action)
	switch (action.type) {
		case ActionTypes.DECK_SHUFFLE:
			return { ...state, maindeck: washDeck(state.maindeck) }
		case ActionTypes.DECK_DRAW:
			return { ...state, drawcard: drawCard(state.maindeck), maindeck: drawFromDeck(state.maindeck) }
		case "DECK_THROW_FROM_HAND":
			return { ...state }
		case "DECK_THROW_FROM_LIFE":
			return { ...state }
		case "DECK_THROW_FROM_ENERGY":
			return { ...state }
		case "DECK_THROW_FROM_SGNLEFT":
			return { ...state }
		case "DECK_THROW_FROM_SGNCENTER":
			return { ...state }
		case "DECK_THROW_FROM_SGNRIGHT":
			return { ...state }
		case "DECK_PUT_TO_LIFE":
			return { ...state }
		case "DECK_PUT_TO_ENERGY":
			return { ...state }
		case "DECK_PUT_TO_SGNLEFT":
			return { ...state }
		case "DECK_PUT_TO_SGNCENTER":
			return { ...state }
		case "DECK_PUT_TO_SGNRIGHT":
			return { ...state }
		default: return state
	}
}

export default deck;