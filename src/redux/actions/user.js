import { ACTION_STRING } from 'src/redux/actions/actionString';
// import { getUserById } from 'src/modules/utils/https/user';

export const userProfile = (data) => {
    // console.log(userProfile)
    return {
        type: ACTION_STRING.dataProfile,
        payload: { data },
    };
};