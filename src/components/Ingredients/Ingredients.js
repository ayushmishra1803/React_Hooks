import React,{useState} from 'react';
import IngredientsList from "./IngredientList"
import IngredientForm from './IngredientForm';
import Search from './Search';

const  Ingredients=() =>{
  return (
    <div className="App">
      <IngredientForm />

      <section>
        <Search />
        {/* Need to add list here! */}
        <IngredientsList/>
      </section>
    </div>
  );
}

export default Ingredients;
