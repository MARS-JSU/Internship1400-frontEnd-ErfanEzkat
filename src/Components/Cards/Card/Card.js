import React, { useState } from "react";
import classes from "./card.module.css";
import { connect } from "react-redux";
import useLocalStorage from "../../../hooks/useLocalStorage";

import {
	addInterst,
	addNotInterst,
	removeInterest,
    addCard,
    removeCard,
	removeNotInterest,
} from "./../../../Redux/actions/index";
const Card = (props) => {
	const [expended, setExpended] = useState(false);
	const [interested, setInterested] = useLocalStorage("interested", []);
	let dec = props.item.dec;
	if (!expended) {
		if (dec.length >= 200) dec = dec.slice(0, 200) + "...";
	}

	return (
		<article className={classes.card}>
			<img
				src={props.item.src}
				className={classes.Image}
				alt="Best of Paris in 7 Days Tour"
			/>

			<footer className={classes.footer}>
				<div className={classes.titleContainer}>
					<h4 className={classes.title}>{props.item.title}</h4>
					<h4>${props.item.price}</h4>
				</div>
				<p className={classes.dec}>
					{dec}

					<button
						onClick={() => setExpended((currExpend) => !currExpend)}
						className={classes.readMore}
					>
						{expended ? "show less" : "read more"}
					</button>
				</p>
				<div className={classes.buttons}>
					{!props.hideIntersted ? (
						<button
							onClick={() => {
								props.removeNotInterest(props.item.title);
								props.addInterst(props.item);
                                props.removeCard(props.item.title)
							}}
							className={classes.interested}
						>
							interested
						</button>
					) : (
						<button
							onClick={() => {
								props.removeInterest(props.item.title);
								props.addCard(props.item);
							}}
				
						>
							remove
						</button>
					)}
					{!props.hideNotIntersted ? (
						<button
							onClick={() => {
								props.addNotInterst(props.item);
								props.removeInterest(props.item.title);
                                props.removeCard(props.item.title);
							}}
						>
							not interested
						</button>
					) : (
						<button
							onClick={() => {
								props.removeNotInterest(props.item.title);
								props.addCard(props.item);
							}}
						
						>
							remove
						</button>
					)}
				</div>
			</footer>
		</article>
	);
};

export default connect(null, {
	addInterst,
	addNotInterst,
	removeInterest,
	removeNotInterest,
    addCard,
    removeCard
})(Card);
