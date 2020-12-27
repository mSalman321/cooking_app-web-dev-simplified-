import React from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'

export default function RecipeEdit() {
    return (
        <div className="recipe-edit">
            <div>
                <button>&times;</button>
            </div>

            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name"/>

                <label htmlFor="cookTime">Cook Time</label>
                <input type="text" name="cookTime" id="cookTime"/>

                <label htmlFor="servings">Servings</label>
                <input type="number" name="servings" id="servings" min="1"/>

                <label htmlFor="instructions">Instructions</label>
                <textarea type="text" name="istructios" id="instructions"/>
            </div>
            <br/>
            <label>Ingredient</label>
            <div>
                <div>Name</div>
                <div>Amount</div>
                <RecipeIngredientEdit/>
                <RecipeIngredientEdit/>

                
                <div></div>
                {}
            </div>
            <div>
                <button>Add Ingredient</button>
            </div>



        </div>
    )
}
