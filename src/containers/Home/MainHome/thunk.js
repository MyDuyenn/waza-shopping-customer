import { fetchingShop } from "./action";
import API from "../../../core/service";
import { dispatch } from "rxjs/internal/observable/range";
const service = new API();

export const requestGetShop = params => {
  return dispatch => {
    service
      .post("getShops", params)
      .then(result => {
        return dispatch(fetchingShop(result))
      })
      .catch(err => {});
  };
};
