import * as ActionTypes from '../actions'
import { avatarCardsList } from '../component/utils/maincards'

// 初始化分身牌组
const initLrig = () => {
    return lrig;
}

// 分身成长
const grow = (lrig,cardlist) => {
	const lastlrig = lrig[lrig.length-1];
	const level = cardlist.indexOf(lastlrig);
	if(level >= cardlist.length-1) {
		return lrig;
	}
	lrig.push(cardlist[level+1])
    return lrig;
}

// 增加硬币
const addcoin = (coin,lrig) => {
	coin+=avatarCardsList[lrig[lrig.length-1]]["getcoin"];
    return coin;
}

// 增加等级
const addlevel = (lrig) => {
    return lrig.length-1;
}

const initState = {
	lrig: ["WD17-005"],
	lrigcardlist: ["WD17-005","WD17-004","WD17-003","WD17-002","WD17-001"],
	level: 0,
	coin: 1
}

const lrig =  (state = initState, action) => {
	// console.log(action)
	// console.log(state)
	switch (action.type) {
		case "LRIG_GROW":
			return { ...state , lrig: grow(state.lrig, state.lrigcardlist),
								level: addlevel(state.lrig),
								coin: addcoin(state.coin, state.lrig) }
		default: return state
	}
}

export default lrig;