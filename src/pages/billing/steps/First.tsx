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
          className="py-4 px-4 border"
          placeholder="Email Address"
        />
      </div>
    </div>
  );
}

export default First;
