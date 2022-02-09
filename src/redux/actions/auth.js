import { login } from "src/modules/utils/https/auth"
import { ACTION_STRING } from './actionString';

export const loginAction = (body) => {
    return {
        type: ACTION_STRING.loginAuth,
        payload: login(body)
    };
};

export const logoutAction = () => {
    return {
        type: ACTION_STRING.logoutAuth,
    };
};

export const updatePin = (pin) => {
    return {
        type: ACTION_STRING.pinAuth,
        payload: pin,
    };
};