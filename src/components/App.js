import React from 'react'
import RecipeList from './RecipeList'
import '../css/app.css'

function App() {
  return (
    <RecipeList recipes={sampleRecipes}>
    </RecipeList>
  )
}




const sampleRecipes = [
  {
    id:1,
    name:'Plain Chicken',
    servings:3,
    cookTime:'1:45',
    instructions:" 1. Put salt on Chicken \n 2. Put chicken in overn \n 3. Eat chicken",
    ingredients:[
      {
        id:1,
        name: 'Chicken',
        amount: '2 Pounds',
      },
      {
        id:2,
        name: 'Salt',
        amount: '1 tbs',
      },

    ]
  },
  {
    id:2,
    name:'Plain Pork',
    servings:4,
    cookTime:'4:45',
    instructions:" 1. Put salt on Chicken \n2. Put chicken in overn\n3. Eat chicken",
    ingredients:[
      {
        id:1,
        name: 'Pork',
        amount: '2 Pounds',
      },
      {
        id:2,
        name: 'Papriat',
        amount: '2 tbs',
      },

    ]
  }

]

export default App;
