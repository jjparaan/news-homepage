import React, { useState, useEffect } from "react";
import "../App.css";

const Hero = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		// cleanup function
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const imgUrl =
		windowWidth >= 1440
			? "../assets/images/image-web-3-desktop.jpg"
			: "../assets/images/image-web-3-mobile.jpg";

	return (
		<section className="hero">
			<img src={imgUrl} alt="hero img" />
			<div className="hero-info">
				<h1>The Bright Future of Web 3.0?</h1>
				<div className="hero-info_details">
					<p>
						We dive into the next evolution of the web that claims to put the
						power of the platforms back into the hands of the people. But is it
						really fulfilling its promise?
					</p>
					<a href="#">READ MORE</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
