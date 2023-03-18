import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import {
  FirstSignUpStep,
  FirstLoginStep,
} from '../components/AuthSteps/FirstStep';
import FourthStep from '../components/AuthSteps/FourthStep';
import {
  SecondLoginStep,
  SecondSignUpStep,
} from '../components/AuthSteps/SecondStep';
import ThirdStep from '../components/AuthSteps/ThirdStep';

type Path = 'signup' | 'login';

interface AuthContext {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  path: Path;
  setPath: Dispatch<SetStateAction<Path>>;
}
const AuthContext = createContext<AuthContext>(null as any);

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Auth Context must be used within the Auth Container');
  }

  return context;
};

function Auth() {
  const [step, setStep] = useState(0);
  const [path, setPath] = useState<Path>('signup');

  

  const renderAuthPath = new Map<number, JSX.Element>([
    [1, path === 'signup' ? <FirstSignUpStep /> : <FirstLoginStep />],
    [2, path === 'signup' ? <SecondSignUpStep /> : <SecondLoginStep />],
    [3, path === 'signup' ? <ThirdStep /> : <FirstLoginStep />],
    [4, path === 'signup' ? <FourthStep /> : <FirstLoginStep />],
  ]);

  return (
    <AuthContext.Provider
      value={{
        step,
        setStep,
        path,
        setPath,
      }}
    >
      {renderAuthPath.get(step)}
    </AuthContext.Provider>
  );
}

export default Auth;
