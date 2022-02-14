import { ACTION_STRING } from "src/redux/actions/actionString";

const initialState = {
    dataProfile: null,
};

const userProfile = (prevState= initialState, action) => {
    switch(action.type){
        case ACTION_STRING.dataProfile:
            const userData = action.payload;
            console.log(userData);
            return {
                ...userData,
            };
            default:
                return prevState;
    }
};

export default userProfile;