import * as React from 'react';
import { Fragment, useEffect } from 'react';

export interface props {
  ingredients: string[];
  callback: (val: number) => void;
  addIngCallback: (ing: string) => void;
}

export default function Child(myprop: props) {
  const [val, setVal] = React.useState(0);

  const [ing, setIng] = React.useState('');

  const valueUseRef = React.useRef(0);
  const inputRef = React.useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  console.log('Child');

  const onUpdate = (v) => {
    setVal(v + 1);

    myprop.callback(v + 1);
  };

  const onAddIng = () => {
    myprop.addIngCallback(ing);
  };

  const showIngr = (ing: string) => {
    return <li>{ing}</li>;
  };
  return (
    <Fragment>
      <div className="bckGreen">
        Child {val}
        <br />
        <br />
        <button
          onClick={() => {
            onUpdate(val);
          }}
        >
          {/* <button
          onClick={onUpdate}
        >           */}
          Increment
        </button>
        <ul>
          {myprop.ingredients?.map(
            (ing) =>
              // <li>{ing}</li>
              showIngr(ing)
            // showIngr(ing)
          )}
        </ul>
        <input
          onChange={(e) => {
            setIng(e.target.value);
          }}
        ></input>
        <button onClick={onAddIng}>Add new Ingredient </button>
        <br />
        <br />
        <input type="text" ref={inputRef}></input>
        {/* <button
          onClick={() => {
            valueUseRef.current++;
            console.log('valueUseRef', valueUseRef.current);
          }}
        >
          Change useRef{' '}
        </button> */}
      </div>
    </Fragment>
  );
}
