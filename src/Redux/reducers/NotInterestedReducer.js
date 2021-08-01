import * as actions from '../actions/actionTypes'
import { getFromLocalStorage } from './../../helpers/helpers';

let init=getFromLocalStorage('NotInterests');
if(init===null)
    init=[]
const notInterestedReducer= (state=init,action)=>{


    switch (action.type) {
        case actions.ADD_NOT_INTERST:
            {

                return [...state,action.payload]
            }
            case actions.REMOVE_NOT_INTEREST: 
            {
                const newState = state.filter(item=>item.title !== action.payload)
                return newState;
            }
        default:
            return state;
    }
}
export default notInterestedReducer