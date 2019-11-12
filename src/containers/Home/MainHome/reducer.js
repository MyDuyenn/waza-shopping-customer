import { FETCHING_SHOP } from "./action";

const initialState = {
  list: [],
  page: 1,
  filter: ""
};

const shopList = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SHOP: {
        const shops = {}
        return action.data;
    }
    default:
      return state;
  }
};
export default shopList;
