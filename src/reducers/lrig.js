import * as ActionTypes from '../actions'
import { avatarCardsList } from '../component/utils/maincards'

// 初始化分身牌组
const initLrig = () => {
    return lrig;
}

// 分身成长
const grow = () => {
    return lrig;
}

const initState = {
	lrig: []
}

const lrig =  (state = initState, action) => {
	console.log(action)
	switch (action.type) {
			return { ...state }
		case "DECK_THROW_FROM_SGNRIGHT":
			return { ...state }
		default: return state
	}
}

export default lrig;