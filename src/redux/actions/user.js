import { ACTION_STRING } from 'src/redux/actions/actionString';
import { getUserById } from 'src/modules/utils/https/user';

export const getProfile = (token, id) => {
    return {
        type: ACTION_STRING.dataProfile,
        payload: getProfile(token, id),
    };
};