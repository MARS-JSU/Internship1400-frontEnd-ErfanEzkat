import * as actions from "../actions/actionTypes";
// import _ from 'lodash'
import { getFromLocalStorage } from './../../helpers/helpers';

let init=getFromLocalStorage('interests');
if(init===null)
    init=[]
const InterestedReducer = (state = init, action) => {
	switch (action.type) {
		case actions.ADD_INTERST: {
			return [...state, action.payload];
		}
		case actions.REMOVE_INTEREST: {
			// let newState = [...state];
			// console.log("remove");
            // console.log(newState)
            // console.log(action.payload)
			// newState = _.remove(newState, (item) =>{
            //     console.log( item.title === action.payload)

            //     return  item.title === action.payload
            // });
            const newState = state.filter(item=>item.title !== action.payload)
			return newState;
        }
		default:
			return state;
	}
};
export default InterestedReducer;
