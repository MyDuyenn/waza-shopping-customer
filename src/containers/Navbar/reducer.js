import {SEARCH_SHOP} from './action';

const initialState = {
    data:[]
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case SEARCH_SHOP:
        return action.payload
    default:
        return state
    }
}
