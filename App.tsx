import * as React from 'react';
import { Fragment } from 'react';
import Child from './child';
import ChildFooter from './child-footer';
import './style.css';

export default function App() {
  // const [parentVal, setParentVal] = React.useState(0);

  const ingredients = [
    'butter',
    'olive oil',
    'garlic',
    'aubergine',
    'bell pepper',
  ];
  let parentVal = 0;
  console.log('App', parentVal);

  const checkValue = (value) => {
    parentVal = value;

    // setParentVal(value);
  };

  return (
    <Fragment>
      <div className="parentWrapper">
        Parent
        <Child callback={checkValue} ingredients={ingredients}></Child>
        <ChildFooter val={parentVal}></ChildFooter>
      </div>
    </Fragment>
  );
}
