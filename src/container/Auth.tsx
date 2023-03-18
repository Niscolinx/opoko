import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useRef,
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

  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

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
      <dialog className="dialog" ref={dialogRef}>
        <section className="grid place-content-center w-full h-[100vh]">
          <div className="bg-white rounded-2xl grid place-content-center justify-items-center w-[64rem] h-[30rem] gap-8 text-[1.6rem]">
            {renderAuthPath.get(step)}
          </div>
        </section>
      </dialog>
    </AuthContext.Provider>
  );
}

export default Auth;
