import { combineReducers } from "redux";
import filterReducer from "./filterReducer/filterReducer";
import tabReducer from "./tabReducer/tabReducer";
import ticketsReducer from "./ticketsReducer/ticketsReducer";

const rootReducer = combineReducers({
  filters: filterReducer,
  tabs: tabReducer,
  tickets: ticketsReducer,
});

export default rootReducer;
