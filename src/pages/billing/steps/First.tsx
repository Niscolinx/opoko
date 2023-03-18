import React from 'react';

function First() {
  return (
    <div className="">
      <section className="grid gap-4">
        <div>
          <p className="font-medium text-[2.8rem]">Enter your email address</p>
          <p className="text-[#4A7AF7] font-bold">
            We'll create an account if you're new, or ask you to sign in.
          </p>
        </div>
        <form>
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

            <div className="flex items-center gap-4">
              <input type="checkbox" id="confirm" />
              <label htmlFor="confirm">Please don't contact me via email</label>
            </div>
          </div>
          <button className="px-16 py-4 rounded-2xl bg-color-blue text-white text-center disabled:opacity-50 disabled:cursor-not-allowed">
            Continue
          </button>
        </form>
      </section>
      <section className="bg-[#F1F5FF] py-10 text-[#666666]">
        <div className="grid gap-4 justify-items-center">
          <p className='font-medium text--[2rem] pb-6'>Summary</p>
        </div>
      </section>
    </div>
  );
}

export default First;
