import * as React from 'react';
import { Fragment } from 'react';

interface props {
  val: number;
}

export default function ChildFooter(myprop: props) {
  console.log('ChildFooter');

  return (
    myprop.val > 10 && <div className="bckbBlue">CHILD FOOTER {myprop.val}</div>
  );
}
