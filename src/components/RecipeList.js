import React from 'react'
import Recipe from './Recipe'

export default function RecipeList({ recipes }) {
    return (
        <div className="recipe-list">
            <div>
                {recipes.map((recipe)=>{
                return  <Recipe key={recipe.id} {...recipe}/>
                })}
            </div>

            <div className="recipe-list__add-recipe-btn-continer">
             <button className="btn btn--primary">Add Recipe</button>
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
