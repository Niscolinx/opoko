import React, { useState } from 'react';

function Billing() {
  const [step, setStep] = useState(1);

  const renderPaths = new Map<Record<number, JSX.Element>[]>([[1, <></>]]);

  return <div>Billing</div>;
}

export default Billing;
