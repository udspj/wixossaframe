export const UI_ATTENTIONBOX_TOGGLE = 'UI_ATTENTIONBOX_TOGGLE'

export const DECK_SHUFFLE = 'DECK_SHUFFLE'
export const DECK_DRAW = 'DECK_DRAW'
export const DECK_THROW = (cardname, fromzone) => ({
    type: 'DECK_THROW_FROM_'+fromzone,
    cardname
})
export const DECK_PUT = (cardname, tozone) => ({
    type: 'DECK_PUT_TO_'+tozone,
    cardname
})
export const HAND_SELECTED = (isselected) => ({
    type: 'HAND_SELECTED',
    isselected
})
export const ENERGY_SELECTED = (isselected) => ({
    type: 'ENERGY_SELECTED',
    isselected
})
export const SGN_SELECTED = (isselected) => ({
    type: 'SGN_SELECTED',
    isselected
})