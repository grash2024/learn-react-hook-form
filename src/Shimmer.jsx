import { Skeleton } from "@mui/material";
import React from "react";

const Shimmer = () => {
	return (
		<div>
			<Skeleton animation="wave" width={400} height={50} />
			<Skeleton animation="wave" width={400} height={50} />
			<Skeleton animation="wave" width={400} height={50} />
			<Skeleton animation="wave" width={400} height={50} />
			<Skeleton animation="wave" width={400} height={50} />
		</div>
	);
};

export default Shimmer;
