import * as ActionTypes from '../actions'
import { mainCardsList } from '../component/utils/maincards'

// 初始化牌组
const initDeck = () => {
    var deck = [];
    for (let key of Object.keys(mainCardsList)) {
      for (var i = mainCardsList[key]['amount']; i >= 1; i--) {
        deck.push(key);
      }
    }
    return washDeck(deck);
}

// 洗牌
const washDeck = (decklist) => {
	var arr = decklist;
	let n = arr.length, random;
    while(0!=n){
        random =  (Math.random() * n--) >>> 0;
        [arr[n], arr[random]] = [arr[random], arr[n]];
    }
    return arr;
}

// 抽卡
const drawCard = (decklist) => {
    return decklist[0];
}

// 从牌组中去除抽的卡
const drawFromDeck = (decklist) => {
	decklist.splice(0,1);
	return decklist;
}

// // 把抽的卡加入到手牌
// const addDrawdCardToHand = (hand, cardname) => {
// 	hand.push(cardname);
// 	return hand;
// }

// // 在废弃区加入弃牌
// const throwCard = (useddeck, cardname) => {
// 	useddeck.push(cardname);
// 	return useddeck;
// }

// 把废弃区的牌加入到主牌组
const discardBacktoMaindeck = (useddeck, maindeck) => {
	let newdeck = maindeck;
	newdeck.push.apply( newdeck, useddeck );
	return washDeck(newdeck);
}

// 检查牌组所在区域上限（手牌9，能量10，生命10，精灵区各1）
const checkZoneLimit = (zonename, zonecardlist) => {
	if( (zonename == 'life') && (zonecardlist.length >= 10) ){
		console.log("生命护甲上限");
		return false;
	}else if( (zonename == 'hand') && (zonecardlist.length >= 9) ){
		console.log("手牌上限，可以先弃一些牌再抽牌");
		return false;
	}else if( (zonename == 'energy') && (zonecardlist.length >= 10) ){
		console.log("能量区上限");
		return false;
	}else if( (zonename == 'sgnleft') && (zonecardlist.length >= 1) ){
		console.log("每个精灵区只能放一只精灵");
		return false;
	}else if( (zonename == 'sgncenter') && (zonecardlist.length >= 1) ){
		console.log("每个精灵区只能放一只精灵");
		return false;
	}else if( (zonename == 'sgnright') && (zonecardlist.length >= 1) ){
		console.log("每个精灵区只能放一只精灵");
		return false;
	}
	return true;
}

// 检查当前区域是否是空
const checkZoneEmpty = (zonecardlist) => {
	if (zonecardlist.length < 1) {
		return true;
	}
	return false;
}

// 从某个区域中移除某张牌
const removeCardFromZone = (cardlist, cardname) => {
	var index = cardlist.indexOf(cardname);
	if (index > -1) {
		cardlist.splice(index, 1);
	}
	return cardlist;
}

// 把某张牌加入到某个区域中
const addCardToZone = (cardlist, cardname) => {
	cardlist.push(cardname);
	return cardlist;
}

const initState = {
	maindeck: initDeck(),
	drawcard: "",
	useddeck: [],
	hand: ["WD17-009","WD17-009","WD17-009","WD17-009","WD17-009","WD17-009","WD17-009","WD17-009","WD17-018"],
	life: [],
	energy: ["WD17-009","WD17-009","WD17-009","WD17-018"],
	sgnleft: [],
	sgncenter: [],
	sgnright: []
}

const deck =  (state = initState, action) => {
	console.log(action)
	switch (action.type) {
		case ActionTypes.DECK_SHUFFLE:
			return { ...state, maindeck: discardBacktoMaindeck(state.useddeck, state.maindeck) }
		case ActionTypes.DECK_DRAW:
			if(state.maindeck.length < 1) {
				discardBacktoMaindeck(state.useddeck, state.maindeck)
			}
			if(!checkZoneLimit("hand", state.hand)) {
				return state
			}
			const card = drawCard(state.maindeck)
			return { ...state , drawcard: card, 
								hand: addCardToZone(state.hand, card),
								maindeck: drawFromDeck(state.maindeck) }
		case "DECK_THROW_FROM_HAND":
			if(!checkZoneEmpty(state.hand)) {
				return state
			}
			return { ...state , useddeck: addCardToZone(state.useddeck, action.cardname),
							 	hand: removeCardFromZone(state.hand, action.cardname)}
		// case "DECK_THROW_FROM_LIFE":
		// 	if(!checkZoneEmpty(state.life)) {
		// 		return state
		// 	}
		// 	return { ...state , useddeck: addCardToZone(state.useddeck, action.cardname),
		// 					 	life: removeCardFromZone(state.life, action.cardname)}
		case "DECK_THROW_FROM_ENERGY":
			if(!checkZoneEmpty(state.energy)) {
				return state
			}
			return { ...state , useddeck: addCardToZone(state.useddeck, action.cardname),
							 	energy: removeCardFromZone(state.energy, action.cardname)}
		case "DECK_THROW_FROM_SGNLEFT":
			if(!checkZoneEmpty(state.sgnleft)) {
				return state
			}
			return { ...state , useddeck: addCardToZone(state.useddeck, action.cardname),
							 	sgnleft: removeCardFromZone(state.sgnleft, action.cardname)}
		case "DECK_THROW_FROM_SGNCENTER":
			if(!checkZoneEmpty(state.sgncenter)) {
				return state
			}
			return { ...state , useddeck: addCardToZone(state.useddeck, action.cardname),
							 	sgncenter: removeCardFromZone(state.sgncenter, action.cardname)}
		case "DECK_THROW_FROM_SGNRIGHT":
			if(!checkZoneEmpty(state.sgnright)) {
				return state
			}
			return { ...state , useddeck: addCardToZone(state.useddeck, action.cardname),
							 	sgnright: removeCardFromZone(state.sgnright, action.cardname)}
		// case "DECK_PUT_TO_LIFE":
		// 	if(!checkZoneLimit("life", state.life)) {
		// 		return state
		// 	}
		// 	return { ...state , life: addCardToZone(state.life, action.cardname),
		// 					 	hand: removeCardFromZone(state.hand, action.cardname)}
		case "DECK_PUT_TO_ENERGY":
			if(!checkZoneLimit("energy", state.energy)) {
				return state
			}
			return { ...state , energy: addCardToZone(state.energy, action.cardname),
							 	hand: removeCardFromZone(state.hand, action.cardname)}
		case "DECK_PUT_TO_SGNLEFT":
			if(!checkZoneLimit("sgnleft", state.sgnleft)) {
				return state
			}
			return { ...state , sgnleft: addCardToZone(state.sgnleft, action.cardname),
							 	hand: removeCardFromZone(state.hand, action.cardname)}
		case "DECK_PUT_TO_SGNCENTER":
			if(!checkZoneLimit("sgncenter", state.sgncenter)) {
				return state
			}
			return { ...state , sgncenter: addCardToZone(state.sgncenter, action.cardname),
							 	hand: removeCardFromZone(state.hand, action.cardname)}
		case "DECK_PUT_TO_SGNRIGHT":
			if(!checkZoneLimit("sgnright", state.sgnright)) {
				return state
			}
			return { ...state , sgnright: addCardToZone(state.sgnright, action.cardname),
							 	hand: removeCardFromZone(state.hand, action.cardname)}
		default: return state
	}
}

export default deck;