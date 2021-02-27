import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import tabReducer from './tabReducer';
import ticketsReducer from './ticketsReducer';

const rootReducer = combineReducers({
    filters: filterReducer,
    tabs: tabReducer,
    tickets: ticketsReducer,
});

export default rootReducer;
