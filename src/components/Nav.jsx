import { useState, useEffect } from "react";
import "../App.css";

const Nav = () => {
	const [navBtn, useNavBtn] = useState(true);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1440) {
				useNavBtn(false);
			} else {
				useNavBtn(true);
			}
		};

		handleResize(); // call the function once on mount
		window.addEventListener("resize", handleResize);

		// cleanup function
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const button = navBtn
		? "./assets/images/icon-menu.svg"
		: "./assets/images/icon-menu-close.svg";

	const toggleBtn = () => {
		useNavBtn((prevNavBtn) => !prevNavBtn);
	};

	return (
		<nav>
			<img
				src="./assets/images/logo.svg"
				alt="news homepage logo"
				className="nav-logo"
			/>
			{(navBtn || window.innerWidth < 1440) && (
				<img
					src={button}
					alt="menu btn"
					className="menu-btn"
					onClick={toggleBtn}
				/>
			)}
			{!navBtn && (
				<>
					{window.innerWidth < 1440 && (
						<div className="nav-overlay" onClick={toggleBtn}></div>
					)}
					<ul className="nav-links">
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">New</a>
						</li>
						<li>
							<a href="#">Popular</a>
						</li>
						<li>
							<a href="#">Trending</a>
						</li>
						<li>
							<a href="#">Categories</a>
						</li>
					</ul>
				</>
			)}
		</nav>
	);
};

export default Nav;
