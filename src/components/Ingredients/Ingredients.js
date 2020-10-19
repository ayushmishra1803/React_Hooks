import React, { useState } from "react";
import IngredientsList from "./IngredientList";
import IngredientForm from "./IngredientForm";
import Search from "./Search";

const Ingredients = () => {
	const [userIngredients, setUserIngredients] = useState([]);
	const addIngredientsHandler = (ingredients) => {
		setUserIngredients((preState) => [...preState, {
			id: Math.random().toString(),
			...ingredients,
    }]);
	};
	return (
		<div className="App">
			<IngredientForm onAddIngredients={addIngredientsHandler} />

			<section>
				<Search />
				{/* Need to add list here! */}
				<IngredientsList ingredients={userIngredients} onRemoveItem={()=>{}} />
			</section>
		</div>
	);
};

export default Ingredients;
