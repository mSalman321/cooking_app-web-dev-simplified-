import React,{ useContext } from 'react'
import Recipe from './Recipe'
import {RecipeContext} from './App'

export default function RecipeList(props) {
    const { recipes } = props
    const value = useContext(RecipeContext)
    const handleRecipeAdd = value.handleRecipeAdd;
    return (
        <div className="recipe-list">
            <div>
                {recipes.map((recipe)=>{
                return (
                 <Recipe
                  key={recipe.id}
                  
                 {...recipe}
                  />
                )
                })}
            </div>

            <div className="recipe-list__add-recipe-btn-continer">
             <button
              className="btn btn--primary"
              onClick={handleRecipeAdd}>Add Recipe</button>
           </div>
        </div>

    )
}


// <>
// <Recipe/>
// <Recipe/>  
// </>

/* <Recipe recipe={...recipe}></Recipe>
import React from 'react'

export default function Recipe(props) {
    props.recipe.id
    return (
        <div>
            
        </div>
    )
} */
