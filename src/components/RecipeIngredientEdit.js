import React from 'react'

export default function RecipeIngredientEdit({ingredient, handleIngredientChange}) {
   
     function handleChange(changes){
         handleIngredientChange(ingredient.id, {...ingredient, ...changes})
     }
   
    return (
        <>
            <input className="recipe-edit__input" onInput={(e)=>handleChange({name:e.target.value})} retype="text" value={ingredient.name}/>
            <input className="recipe-edit__input" onInput={(e)=>handleChange({amount:e.target.value})} retype="text" value={ingredient.amount}/>
            <button className="btn btn--danger">&times;</button>
        </>
    )
}
