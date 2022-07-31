import { combineReducers } from "redux";
import categoryReducer from "./CategoryReducer";

const RootReducer = combineReducers({
    catgeoryState:categoryReducer
})

export default RootReducer;