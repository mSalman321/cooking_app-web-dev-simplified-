import React from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'

export default function RecipeEdit(props) {
    const {recipe} = props
    return (
        <div className="recipe-edit">
            <div className="recipe-edit__remove-button-conatiner">
                <button className="btn recipe-edit_-remove-button">&times;</button>
            </div>

            <div className="recipe-edit__details-grid">
                <label htmlFor="name" className="recipe-edit__label">Name</label>
                <input type="text" name="name" id="name" className="recipe-edit__input" value={recipe.name} />

                <label htmlFor="cookTime" className="recipe-edit__label">Cook Time</label>
                <input type="text" name="cookTime" id="cookTime" className="recipe-edit__input" value={recipe.cookTime}/>

                <label htmlFor="servings" className="recipe-edit__label">Servings</label>
                <input type="number" name="servings" id="servings" className="recipe-edit__input" min="1" value={recipe.servings}/>

                <label htmlFor="instructions" className="recipe-edit__label">Instructions</label>
                <textarea type="text" name="istructios" id="instructions" className="recipe-edit__input">{recipe.instructions}</textarea>
            </div>
            <br/>
            <label className="recipe-edit__label">Ingredient</label>
            <div className="recipe-edit_ingredient-grid">
                <div>Name</div>
                <div>Amount</div>
                {recipe.ingredients.map(ingredient =>(
                  <RecipeIngredientEdit key={ingredient.id} ingredient={ingredient}/>
                ))}

                
                <div></div>
                {}
            </div>
            <div className="recipe-edit__add-ingredient-btn-container">
                <button className="btn btn--primary">Add Ingredient</button>
            </div>



        </div>
    )
}
