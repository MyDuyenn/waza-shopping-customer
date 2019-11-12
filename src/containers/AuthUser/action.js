export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const GET_CURRENT_USER = 'GET_CURRENT_USER'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOG_OUT = 'LOG_OUT'


export const requestSignUpPassenger = (data) => {
    return {
        type: SIGN_UP_REQUEST,
        data
    }
}

export const getCurrentUser = (data) => {
    return {
        type: GET_CURRENT_USER,
        data
    }
}

export const userLogin = (data) => {
    return {
        type:LOGIN_REQUEST,
        data
    }
}

export const userLogout = () => {
    return {
        type: LOG_OUT
    }
}