import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import authUser from '../containers/AuthUser/reducer';
import shopList from '../containers/Home//MainHome/reducer';


const reducer = combineReducers({
    form: formReducer,
    authUser,
    shopList
});
export default reducer;