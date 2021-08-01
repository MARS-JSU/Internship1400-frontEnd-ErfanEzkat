import { combineReducers } from "redux";
import cardReducer from "./reducers/CardsReducer";
import InterestedReducer from "./reducers/InterestedReducer";
import NotInterestedReducer from "./reducers/NotInterestedReducer";
export default combineReducers({

    Cards:cardReducer,
    InterestedCards:InterestedReducer,
    NotInterestedCards:NotInterestedReducer

})