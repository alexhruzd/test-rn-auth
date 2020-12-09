export const RESTORE_TOKEN = "RESTORE_TOKEN";
export const SING_IN = "SING_IN";
export const SING_OUT = "SING_OUT";

export const restoreToken = (token) => ({type: RESTORE_TOKEN, token: token});
export const singIn = (token) => ({type: SING_IN, token: token});
export const singOut = (token) => ({type: SING_OUT, token: token});