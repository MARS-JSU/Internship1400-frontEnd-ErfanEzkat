import * as actions from "./actionTypes";
import {addToLocalStorage,removeFromLocalStorage} from '../../helpers/helpers'

export const addInterst = (item) => {
	addToLocalStorage('interests',item)
	return {
		type: actions.ADD_INTERST,
		payload: item,
	};
};
export const removeInterest = (id) => {
	//we use title as id here
    removeFromLocalStorage('interests',id)
	return {
		type: actions.REMOVE_INTEREST,
		payload: id,
	};
};

export const removeNotInterest = (id) => {
	//we use title as id here
    removeFromLocalStorage('NotInterests',id);

	return {
		type: actions.REMOVE_NOT_INTEREST,
		payload: id,
	};
};
export const addNotInterst = (item) => {
    addToLocalStorage('NotInterests',item)
	return {
		type: actions.ADD_NOT_INTERST,
		payload: item,
	};
};

export const removeCard = (id) => {
	//we use title as id here
    removeFromLocalStorage('cards',id);

	return {
		type: actions.REMOVE_CARD,
		payload: id,
	};
};
export const addCard = (item) => {
    addToLocalStorage('cards',item)
	return {
		type: actions.ADD_CARD,
		payload: item,
	};
};
