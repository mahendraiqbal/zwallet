import { ACTION_STRING } from 'src/redux/actions/actionString';
import { ActionType } from 'redux-promise-middleware';


const initialState = {
    userData: {
        token: "",
        pin: "",
        id: null,
    },

    isPending: false,
    isFulfilled: false,
    isRejected: false,
    err: {},
};
const authReducer = (prevState = initialState, action) => {
    const { loginAuth, pinAuth } = ACTION_STRING
    const { Pending, Fulfilled, Rejected } = ActionType

    switch (action.type) {
        case loginAuth.concat('_', Pending):
            return {
                ...prevState,
                isPending: true,
                isFulfilled: false,
                isRejected: false,
            };
        case loginAuth.concat('_', Fulfilled):
            // console.log(data)
            const data = action.payload.data;
            const userData = {
                ...prevState.userData,
                token: data.data.token,
                pin: data.data.pin,
                id: data.data.id,
            }
            return {
                ...prevState,
                isPending: false,
                isFulfilled: true,
                userData,
            }
        case loginAuth.concat('_', Rejected):
            const err = action.payload;
            return {
                ...prevState,
                isPending: false,
                isRejected: true,
                err,
            }
            
        case pinAuth:
            const newPin = action.payload;
            return {
                ...prevState,
                userData: {
                    ...prevState,
                    userData,
                    pin: newPin,
                }
            }
        
            default:
                return prevState;
    }
}

export default authReducer;