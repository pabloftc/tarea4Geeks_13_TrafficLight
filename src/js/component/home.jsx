import React, { useState } from "react";

const Home = () => {
	const [color, setColor] = useState("");

	return (
		<div className="flex-div">
			<div className="top"></div>
			<div className="box">
				<div
					onClick={() => setColor("red")}
					className={`light red ${
						color === "red" ? " glow" : ""
					}`}></div>
				<div
					onClick={() => setColor("yellow")}
					className={`light yellow ${
						color === "yellow" ? " glow" : ""
					}`}></div>
				<div
					onClick={() => setColor("green")}
					className={`light green ${
						color === "green" ? " glow" : ""
					}`}></div>
			</div>
		</div>
	);
};

export default Home;
