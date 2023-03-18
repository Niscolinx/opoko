import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
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
import { signal, effect } from '@preact/signals-react';
import { SlClose } from 'react-icons/sl';

type Path = 'signup' | 'login';

export const pathSignal = signal<Path | undefined>(undefined);
export const isAuthOpen = signal(false);

interface AuthContext {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}
const AuthContext = createContext<AuthContext>(null as any);

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Auth Context must be used within the Auth Container');
  }

  return context;
};

function Auth() {
  const [step, setStep] = useState(1);
  const [path, setPath] = useState(pathSignal.value);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const closeDialog = () => {
    
    if (dialogRef.current) {
      pathSignal.value = undefined;
      dialogRef.current.close();
    }
  };

  const openDialog = () => {
    if (dialogRef.current) {
      setStep(1)
      dialogRef.current.showModal();
    }
  };

  useEffect(() => {
    effect(() => {
      if (isAuthOpen.value) {
        console.log('useEffect close', isAuthOpen.value);
        closeDialog();
      }

      if (pathSignal.value) {
        setPath(pathSignal.value);
        openDialog();
      }
    });
  }, []);

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
      }}
    >
      <dialog className="dialog" ref={dialogRef}>
        <section className="grid place-content-center w-full h-[100vh]">
          <div className="bg-white rounded-2xl grid place-content-center justify-items-center w-[64rem] gap-8 relative">
            <button className="" onClick={closeDialog}>
              <SlClose className="text-5xl absolute right-0 top-0 m-6 text-gray-600" />
            </button>
            {renderAuthPath.get(step)}
          </div>
        </section>
      </dialog>
    </AuthContext.Provider>
  );
}

export default Auth;
