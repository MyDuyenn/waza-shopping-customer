import {shopSearch} from './action'
import API from '../../core/service'
const service = new API()
export const SearchShopRequest = (input) => {
    return dispatch => {
        service.post(input).then((result) => {
            return dispatch(shopSearch(result))
        })}
}
