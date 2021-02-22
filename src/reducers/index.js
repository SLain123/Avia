import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import tabReducer from './tabReducer';

const rootReducer = combineReducers({ filters: filterReducer, tabs: tabReducer });

export default rootReducer;
