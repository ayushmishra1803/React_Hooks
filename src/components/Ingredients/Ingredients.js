import React, { useState } from "react";
import IngredientsList from "./IngredientList";
import IngredientForm from "./IngredientForm";
import Search from "./Search";
import axois from "axios";

const Ingredients = () => {
	const [userIngredients, setUserIngredients] = useState([]);
	const addIngredientsHandler = (ingredients) => {
		axois
			.post(
				"https://react-hooks-51ed1.firebaseio.com/ingredients.json",
				ingredients,
			)
			.then((re) => {
				console.log(re);
				setUserIngredients((preState) => [
					...preState,
					{
						id: re.data.name,
						...ingredients,
					},
				]);
			})
			.catch((re) => {
				console.log(re);
			});
	};
	const removeHandler = (id) => {
		const newIngredients = userIngredients.filter((re) => re.id !== id);
		console.log(newIngredients);
		setUserIngredients(newIngredients);
	};
	return (
		<div className="App">
			<IngredientForm onAddIngredients={addIngredientsHandler} />

			<section>
				<Search />
				{/* Need to add list here! */}
				<IngredientsList
					ingredients={userIngredients}
					onRemoveItem={removeHandler}
				/>
			</section>
		</div>
	);
};

export default Ingredients;
