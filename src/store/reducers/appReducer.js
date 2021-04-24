import commonRoot from './commonReducer';
import { combineReducers } from 'redux';

const postmatcchAppReducer = combineReducers({
    common: commonRoot,
});

export default postmatcchAppReducer;