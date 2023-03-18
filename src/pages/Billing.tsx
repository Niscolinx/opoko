import React, { useState } from 'react';

function Billing() {
  const [step, setStep] = useState(1);

  const renderPaths = new Map<number, JSX.Element>([
    [
      1,
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel alias
        distinctio illum cum? Asperiores reiciendis voluptatibus fuga repellat
        et! Incidunt quasi placeat ratione! Minus excepturi fugiat incidunt
        voluptate amet magni.
      </>,
    ],
  ]);

  return <div>Billing</div>;
}

export default Billing;
