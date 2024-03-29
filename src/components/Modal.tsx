import React, { useState, useEffect } from 'react';
import { GrFormClose } from 'react-icons/gr';
import { ToastContainer, toast } from 'react-toastify';

interface IModal {
  children: React.ReactNode;
}

function Modal({ children }: IModal) {
  const [step, setStep] = useState(0);
  const [isToast, setIsToast] = useState(false);

  const notify = (message: string = 'Wrong OTP code') => {
    setIsToast(true);
    toast(message, {
      type: 'error',
      className: 'bg-[#FDE9E9] text-[#E82830]',
    });
  };

  return (
    <></>
    // <AuthContext.Provider
    //   value={{
    //     setStep,
    //     step,
    //     notify,
    //   }}
    // >
    //   <div>
    //     {isOpen && (
    //       <div className="authDialog relative z-10 " id="authDialog">
    //         {isToast && (
    //           <ToastContainer />

    //         )}
    //         <div className="authDialog__container">
    //           <button className="authDialog__button" onClick={closeModal}>
    //             <GrFormClose className="text-3xl " />
    //           </button>

    //           {children}
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </AuthContext.Provider>
  );
}

export default Modal;
