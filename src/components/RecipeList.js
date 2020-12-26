import React from 'react'
import Recipe from './Recipe'

export default function RecipeList(props) {
    const { recipes,handleRecipeAdd,handleRecipeDelete } = props
    return (
        <div className="recipe-list">
            <div>
                {recipes.map((recipe)=>{
                return (
                 <Recipe
                  key={recipe.id}
                  handleRecipeDelete = {handleRecipeDelete}
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
