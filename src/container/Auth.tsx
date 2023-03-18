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
// import { AuthContext } from '../Context/AppContext';
// import { modalSelector } from '../store/features/modal';

interface AuthContext {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  path: 'signup' | 'login';
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
  // const modalData = useAppSelector(modalSelector);
  // const AuthContextData = useContext(AuthContext);
  // const { step } = AuthContextData;

  const [step, setStep] = useState(0);

  // const { path } = modalData;

  // const AuthSteps = () => {
  //   switch (step) {
  //     case 0:
  //       return path === 'signup' ? <FirstSignUpStep /> : <FirstLoginStep />;
  //     case 1:
  //       return path === 'signup' ? <SecondSignUpStep /> : <SecondLoginStep />;
  //     case 2:
  //       return path === 'signup' ? <ThirdStep /> : <FirstLoginStep />;
  //     case 3:
  //       return path === 'signup' ? <FourthStep /> : <FirstLoginStep />;

  //     default:
  //       return path === 'signup' ? <FirstSignUpStep /> : <FirstLoginStep />;
  //   }
  // };

  // return <AuthSteps />;

  return (
    <AuthContext.Provider
      value={{
        step,
        setStep,
        path: 'signup',
      }}
    ></AuthContext.Provider>
  );
}

export default Auth;
