import React from "react";
import "../App.css";

const Items = (props) => {
	return (
		<article className="items-article">
			<img src={props.img} alt="item img" />
			<div className="items-article_info">
				<h3>{`0${props.serial + 1}`}</h3>
				<h4>{props.title}</h4>
				<p>{props.details}</p>
			</div>
		</article>
	);
};

export default Items;
