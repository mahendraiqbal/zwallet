import { combineReducers } from 'redux';
import authReducer from './auth';
import transferReducer from './transfer';
import { ACTION_STRING } from '../actions/actionString';
import storage from 'redux-persist/lib/storage';
import userProfile from './user';

const appReducer = combineReducers({
    auth: authReducer,
    transfer: transferReducer,
    user: userProfile,
});

const rootReducer = (state, action) => {
    if (action.type === ACTION_STRING.authLogout) {
        storage.removeItem(`persis:root`);

        state= undefined;
    }
    return appReducer(state, action)
};

export default rootReducer;