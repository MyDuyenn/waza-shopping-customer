import {requestSignUpPassenger,userLogin} from './action';
import API from '../../core/service'
import Swal from 'sweetalert2'

const service = new API()

export const SignUp = (params) => {
  return dispatch => {
    service.post('userSignin',params).then((result) => {
      if(result.data.code === 203) {
        return Swal.fire({
        text: result.data.message,
        type: 'error',
        confirmButtonText: 'Please Sign Up Again'
      })} else {
        Swal.fire({
          title: 'Signup success',
          html: 'You will be redirect to homepage real soon',
          timer: 2000
        }).then(() => {
          dispatch(requestSignUpPassenger(result.data)); 
        })
      }
    }).catch((err) => {
      console.log(err)
    });
  }  
}

export const LoginUser = (params) => {
  return dispatch => {
    service.post('userLogin',params).then((result) => {
      if(result.data.code === 203) {
        return Swal.fire({
        text: result.data.message,
        type: 'error',
        confirmButtonText: 'Please Login Again'
      })} else {
        Swal.fire({
          title: 'Signup success',
          html: 'You will be redirect to homepage real soon',
          timer: 2000
        }).then(() => {
          dispatch(userLogin(result.data)); 
        })
      }
    }).catch((error) => {
      return Swal.fire({
        text: error.error,
        type: 'error',
        confirmButtonText: 'Please Login Again'
      })
    });
  }
}
