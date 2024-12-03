import React from "react";
const Login = React.lazy(() => import("./Login"));
import { Typography } from "@mui/material";
import { Suspense } from "react";
import Shimmer from "./Shimmer";

const Home = () => {
	return (
		<div>
			<Typography variant="h3" fontWeight={500}>
				Page
			</Typography>
			<div
				style={{
					display: "flex",
					width: "100vw",
					height: "100vh",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Suspense fallback={<Shimmer />}>
					<Login />
				</Suspense>
			</div>
		</div>
	);
};

export default Home;
