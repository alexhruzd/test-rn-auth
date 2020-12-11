export const RESTORE_TOKEN = "RESTORE_TOKEN";
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

export const restoreToken = (token) => ({type: RESTORE_TOKEN, token: token});
export const signIn = (token) => ({type: SIGN_IN, token: token});
export const signOut = (token) => ({type: SIGN_OUT});