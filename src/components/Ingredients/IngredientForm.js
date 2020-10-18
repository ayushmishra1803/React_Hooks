import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
	const initalState = useState({ title: "", amount: "" });
	const submitHandler = (event) => {
		event.preventDefault();
		// ...
	};

	return (
		<section className="ingredient-form">
			<Card>
				<form onSubmit={submitHandler}>
					<div className="form-control">
						<label htmlFor="title">Name</label>
						<input
							type="text"
							id="title"
							value={initalState[0].title}
							onChange={(event) =>
								initalState[1]({
									title: event.target.value,
									amount: initalState[0].amount,
								})
							}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="amount">Amount</label>
						<input
							type="number"
							id="amount"
							value={initalState[0].amount}
							onChange={(event) =>
								initalState[1]({
									title:initalState[0].title,
									amount: event.target.value,
								})
							}
						/>
					</div>
					<div className="ingredient-form__actions">
						<button type="submit">Add Ingredient</button>
					</div>
				</form>
			</Card>
		</section>
	);
});

export default IngredientForm;
