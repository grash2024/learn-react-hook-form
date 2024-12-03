import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
	const {
		handleSubmit,
		formState: { errors },
		register,
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			style={{
				display: "flex",
				flexDirection: "column",

				width: "400px",
				gap: "10px",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Typography variant="h4" sx={{ fontWeight: "bold" }}>
					Login Form
				</Typography>
			</div>

			<TextField
				id="outlined-basic"
				label="Enter your name"
				variant="outlined"
				{...register("fname", {
					required: { value: true, message: "Name is required" },
				})}
			/>
			{errors.fname && (
				<Typography color="warning" variant="p" component="p">
					{errors.fname.message}
				</Typography>
			)}
			<TextField
				id="outlined-basic"
				label="Enter your Email"
				variant="outlined"
				{...register("email", {
					required: { value: true, message: "Email is required" },
				})}
			/>
			{errors.email && (
				<Typography color="warning" variant="p" component="p">
					{errors.email.message}
				</Typography>
			)}
			<TextField
				id="outlined-basic"
				label="Enter your password"
				variant="outlined"
				{...register("password", {
					required: { value: true, message: "Password is required" },
				})}
			/>
			{errors.password && (
				<Typography color="warning" variant="p" component="p">
					{errors.password.message}
				</Typography>
			)}
			<TextField
				id="outlined-basic"
				label="Confirm Password"
				variant="outlined"
				{...register("confirmpassword", {
					required: { value: "true", message: "Enter confirm password" },
				})}
			/>
			{errors.confirmpassword && (
				<Typography color="warning" variant="p" component="p">
					{errors.confirmpassword.message}
				</Typography>
			)}
			<Button type="submit" color="success" variant="contained">
				Login
			</Button>
		</form>
	);
};

export default Login;
