import * as React from 'react';
import { Fragment } from 'react';

export interface props {
  ingredients: string[];
  callback: (val: number) => void;
}

export default function Child(myprop: props) {
  const [val, setVal] = React.useState(0);

  console.log('Child');

  const onUpdate = (v) => {
    setVal(v + 1);

    myprop.callback(v + 1);
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
          {myprop.ingredients?.map((ing) =>
            // <li key={ing}>{ing}</li>
            showIngr(ing)
          )}
        </ul>
      </div>
    </Fragment>
  );
}
