import React from 'react';

function First() {
  return (
    <div className="grid gap-4">
      <div>
        <p className="font-medium text-[2.8rem]">Enter your email address</p>
        <p className="text-[#4A7AF7] font-bold">
          We'll create an account if you're new, or ask you to sign in.
        </p>
      </div>
      <div>
        <input
          type="email"
          className="py-4 px-4 border rounded-lg"
          placeholder="Email Address"
        />

        <p className="font-bold">
          By clicking "Continue", I agree that Opoko can keep me informed by
          sending personalized emails about products and services. See our
          Privacy Policy for details or to opt-out at any time.
        </p>

        <div className='flex items-center gap-4'>
          <input type="checkbox" id="confirm" />
          <label htmlFor="confirm">Please don't contact me via email</label>
        </div>
      </div>
    </div>
  );
}

export default First;
