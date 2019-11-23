import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div className="container">
		<form>
			<div className="scout-masters-logo" />

			<div className="sign-in d-flex flex-column align-items-center">
				<h2>Sign in</h2>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1" />
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Enter email"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1" />
					<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
				</div>
				<button type="submit" className="btn btn-danger">
					Submit
				</button>
			</div>
		</form>
	</div>
);
