import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { toast, ToastContainer } from 'react-toastify';
import { useAuthContext } from '../../container/Auth';

function ThirdStep() {
  type ValidationError = {
    email: string;
    password: string;
  };

  const { setStep } = useAuthContext();

  const [otp, setOtp] = useState<string>('');
  const [message, setMessage] = useState<{
    message: string;
    type: string;
  } | null>(null);
  const [isOtpLengthInValid, setIsOtpLengthInValid] = useState(true);
  const [loading, setLoading] = useState(false);
  // const [validationError, setValidationError] =
  //   useState<ValidationError | null>(null);

  const otpHandler = (input: string) => {
    setOtp(input);
    setMessage(null);
    if (input.length < 4) {
      setIsOtpLengthInValid(true);
    } else {
      setIsOtpLengthInValid(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (otp.length < 4) {
      return;
    }

    if (otp !== '4444') {
      //return notify('Wrong OTP code');
      return toast('Wrong OTP code', {
        type: 'error',
      });
    }

    setStep(4);
  };

  return (
    <>
      <ToastContainer />
      <div className="grid gap-10 mt-16 justify-center pb-5">
        <h2 className="heading2 text-center">We just sent your an email</h2>

        <form className="grid w-full form" onSubmit={handleSubmit}>
          {' '}
          {message && message.type === 'error' && (
            <p className="text-red-500 text-sm font-semibold text-center py-4">
              {message.message}
            </p>
          )}
          <p className="text-center">
            {/* Enter the email we sent to {userSelector.email} */}
          </p>
          <OtpInput
            value={otp}
            onChange={otpHandler}
            numInputs={4}
            inputStyle="pinlogin-field"
            containerStyle="pinlogin"
            shouldAutoFocus
            isInputNum
          />
          <button
            className="bg-color-blue text-[1.6rem] py-6 disabled:opacity-50 btn1"
            type="submit"
            disabled={isOtpLengthInValid}
          >
            {loading ? 'Loading...' : 'Continue'}
          </button>
        </form>
        <p className="authText mt-10">
          Didn't get a code? <button> Resend code</button>
        </p>
      </div>
    </>
  );
}

export default ThirdStep;
