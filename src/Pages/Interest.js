import React from "react";
import { connect } from "react-redux";
import Cards from "../Components/Cards/Cards";

const Interest = (props) => {
	let alert=<h2 style={{textAlign:'center',textTransform:'uppercase'}}>no card selected</h2>
    if(props.cards.length>0){
        alert=null;
    }
	return (
		<main>
			{alert}
			<Cards hideIntersted={true} items={props.cards} />
		</main>
	);
};
const mapStateToProps = (state) => {
	return {
		cards: state.InterestedCards,
	};
};

export default connect(mapStateToProps, null)(Interest);
