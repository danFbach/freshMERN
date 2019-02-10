import callApi from '../../util/apiCaller';

// Export Constants
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const REGISTER = 'REGISTER';

// Export Actions
export function authLogin(userdata) {
  return {
    type: LOG_IN,
    userdata,
  };
}

export function authLoginRequest(userdata) {
  return (dispatch) => {
    return callApi('auth', 'userdata', {
      userdata: {
        username: userdata.username,
        passphrase: userdata.passphrase,
      },
    }).then(res => dispatch(authLogin(res.userdata)));
  };
}

export function authRegister() {
  
}
