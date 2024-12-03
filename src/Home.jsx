import React from "react";
import Login from "./Login";

const Home = () => {
	return (
		<div
			style={{
				display: "flex",
				width: "100vw",
				height: "100vh",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Login />
		</div>
	);
};

export default Home;
