import React, {useState, useEffect} from 'react'
import RecipeList from './RecipeList'
import '../css/app.css'
import {v4 as uuidv4} from 'uuid'
import RecipeEdit from './RecipeEdit'

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'

function App() {

  const [selectedRecipeId, setSelectedRecipeId] = useState()
  const [recipes,setRecipes] = useState(sampleRecipes)
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)

  // console.log(selectedRecipe)


  useEffect(() => {
    console.log('f')
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
    
  },[])

  useEffect(() => {
         localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
        //  return () => {
        //    console.log('recipes set')
        //  }
  },[recipes])


  const recipeContextValue ={
    handleRecipeDelete:handleRecipeDelete,
    handleRecipeAdd:handleRecipeAdd,
    handleRecipeSelect:handleRecipeSelect
  }



 
  console.log("App component")

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList 
        recipes={recipes}
      />
     {selectedRecipe &&  <RecipeEdit recipe={selectedRecipe}/>}
    </RecipeContext.Provider>

  )

 

  function handleRecipeAdd(){
    const newRecipe = {
      id:uuidv4(),
      name:'New',
      servings:1,
      cookTime:'1:00',
      instructions:'Instr.',
      ingredients:[
        {id:uuidv4(), name:'Name',amount:'1 tbs' }
      ]
    }
    setRecipes([...recipes, newRecipe])
  }

 

  function handleRecipeDelete(id){
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }


  function handleRecipeSelect(id){
    setSelectedRecipeId(id)
  }
  

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
