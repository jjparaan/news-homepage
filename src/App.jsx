import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Aside from "./components/Aside";
import Items from "./components/Items";
import "./App.css";
import { news } from "./news";
import { items } from "./items";

const App = () => {
	const newsElements = news.map((data) => (
		<Aside key={data.id} title={data.title} details={data.details} />
	));
	const itemElements = items.map((item) => {
		return (
			<Items
				key={item.id}
				img={item.img}
				serial={item.serial}
				title={item.title}
				details={item.details}
			/>
		);
	});

	return (
		<div className="news-homepage">
			<Nav />
			<section className="news-section">
				<Hero />
				<aside>
					<h2>New</h2>
					{newsElements}
				</aside>
			</section>
			<footer>{itemElements}</footer>
		</div>
	);
};

export default App;
