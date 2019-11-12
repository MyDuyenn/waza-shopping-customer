import {SIGN_UP_REQUEST, GET_CURRENT_USER,LOGIN_REQUEST,LOG_OUT} from './action'

const initialState = {
    token:null,
    user:{}
}

const passengerAuth = (state = initialState, action) => {

    switch (action.type) {
    case SIGN_UP_REQUEST: {
        localStorage.setItem('token',action.data.sessionToken)
        localStorage.setItem('user',JSON.stringify(action.data))
        const signup = {
            token: action.data.sessionToken,
            user: action.data
        }
        return signup
    }
    case LOGIN_REQUEST: {
        localStorage.setItem('token',action.data.sessionToken)
        localStorage.setItem('user',JSON.stringify(action.data))
        const login = {
            token: action.data.sessionToken,
            user: action.data
        }
        return login
    }
    case GET_CURRENT_USER: {
        const currentUser = {
            token: action.data.token,
            user: action.data.user
        }
        return currentUser
    }
    case LOG_OUT: {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        return initialState
    }
    default:
        return state
    }
}

export default passengerAuth