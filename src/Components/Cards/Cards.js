import React from "react";
import Card from "./Card/Card";
import classes from './Cards.module.css'
const Cards = ({ items,hideIntersted,hideNotIntersted }) => {
	const showItems = items.map((item) => (
		<Card
        hideIntersted={hideIntersted}
        hideNotIntersted={hideNotIntersted}
        key={item.title}
		item={item}
		/>
	));
	return <div className={classes.cards}>{showItems}</div>;
};

export default Cards;
