import React, { useState } from 'react';

function First() {
  const [email, setEmail] = useState('');
  return (
    <div
      className="grid gap-8 "
      style={{
        gridTemplateColumns: '70% auto',
      }}
    >
      <section>
        <div className="mb-10">
          <p className="font-medium text-[2.8rem]">Enter your email address</p>
          <p className="text-[#4A7AF7] font-bold">
            We'll create an account if you're new, or ask you to sign in.
          </p>
        </div>
        <form>
          <div className="max-w-[60rem] grid gap-8">
            <input
              type="email"
              className="py-4 px-4 border rounded-lg w-[40rem]"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <p className="font-bold">
              By clicking "Continue", I agree that Opoko can keep me informed by
              sending personalized emails about products and services. See our
              Privacy Policy for details or to opt-out at any time.
            </p>

            <div className="flex items-center gap-4">
              <input type="checkbox" id="confirm" className="cursor-pointer" />
              <label htmlFor="confirm" className="cursor-pointer">
                Please don't contact me via email
              </label>
            </div>
          </div>
          <button
            className="px-16 py-4 rounded-2xl bg-color-blue text-white text-center disabled:opacity-50 disabled:cursor-not-allowed mt-[5rem]"
            disabled={email.length < 1}
          >
            Continue
          </button>
        </form>
      </section>
      <section className="bg-[#F1F5FF] py-10 text-[#666666] p-8 h-[80vh]">
        <div className="grid gap-8 justify-items-start w-full">
          <p className="font-medium text--[2rem]">Summary</p>
          <div className="border-t border-b border-b-gray-500 border-t-gray-500 py-6 w-full grid gap-8">
            <img src="/asset/logo.svg" alt="" />
            <p className="capitalize text-color-blue">
              Subscription plan (basic)
            </p>
            <div className="bg-color-orange rounded-2xl h-[10rem]">&nbsp;</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default First;
