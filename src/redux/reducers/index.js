import { combineReducers } from 'redux';
import authReducer from './auth';
import { ACTION_STRING } from '../actions/actionString';
import storage from 'redux-persist/lib/storage';

const appReducer = combineReducers({
    auth: authReducer,
});

const rootReducer = (state, action) => {
    if (action.type === ACTION_STRING.authLogout) {
        storage.removeItem(`persis:root`);

        state= undefined;
    }
    return appReducer(state, action)
};

export default rootReducer;