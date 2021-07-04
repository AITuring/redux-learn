import { createStore, combineReducers } from "redux";
import courseTabListReducer from "./reducers";
import courseTabListState from "./states";

const allReducers = combineReducers({
    courseTabList: courseTabListReducer
})
const store = createStore(allReducers, {
    courseTabList: courseTabListState
});

export default store;