import React from "react";
import "../App.css";

const Aside = (props) => {
	return (
		<article className="news-article">
			<h3>{props.title}</h3>
			<p>{props.details}</p>
		</article>
	);
};

export default Aside;
