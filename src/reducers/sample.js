import * as ActionTypes from '../actions'

const initialState = {
  attentionBoxVisible: true,
}

const sample =  (state = initialState, action) => {
  // alert("121231212")
  switch (action.type) {
    case ActionTypes.UI_ATTENTIONBOX_TOGGLE:
      return { ...state, attentionBoxVisible: !state.attentionBoxVisible }
    default: return state
  }
}

export default sample;