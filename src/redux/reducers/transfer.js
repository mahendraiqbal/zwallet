import { ACTION_STRING } from 'src/redux/actions/actionString';

const initialState = {
    transferData: null,
};

const transferReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case ACTION_STRING.transferData:
            const data = action.payload;
            return{
                ...data,
            }
            default:
                return prevState;
    }
};

export default transferReducer;