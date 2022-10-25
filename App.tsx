import * as React from 'react';
import { Fragment } from 'react';
import Child from './child';
import ChildFooter from './child-footer';
import './style.css';

export default function App() {
  const [parentVal, setParentVal] = React.useState(0);

  
  const ingredientsInitial = [
    'butter',
    'olive oil',
    'garlic',
    'aubergine',
    'bell pepper',
  ];

  const [ingredients, setIngredients] = React.useState(ingredientsInitial);

  // let parentVal = 0;
  console.log('App', parentVal);

  const checkValue = (value) => {
    // parentVal = value;

    setParentVal(value);
  };

  const addIng = (ing) => {
    console.log('addIng', ing);
    // ingredients.push(ing);
    setIngredients([...ingredients, ing]);
    console.log('addIng ingredients', ingredients);
  };

  return (
    <Fragment>
      <div className="parentWrapper">
        Parent
        <Child
          callback={checkValue}
          addIngCallback={addIng}
          ingredients={ingredients}
        ></Child>
        <ChildFooter val={parentVal}></ChildFooter>
      </div>
    </Fragment>
  );
}
