import React, { useState } from 'react';
import First from './steps/First';

function Billing() {
  const [step, setStep] = useState(1);

  const renderPaths = new Map<number, JSX.Element>([[1, <First />]]);

  return (
    <div className="grid">
      <p>
        Step {step} of {renderPaths.size}
      </p>
      {renderPaths.get(step)}
    </div>
  );
}

export default Billing;