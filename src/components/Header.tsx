import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { pathSignal } from '../container/Auth';

const Header = () => {
  const path: Record<'name' | 'path', string>[] = [
    {
      name: 'home',
      path: '/',
    },
    {
      name: 'about us',
      path: '/about-us',
    },
    {
      name: 'pricing',
      path: '/pricing',
    },
  ];

  const location = useLocation();
  const { pathname } = location;

  const openLoginModal = () => {
    pathSignal.value = 'login';
  };
  return (
    <div className="grid items-center grid-cols-3 p-[2rem]">
      <img src="/asset/logo.svg" alt="" />
      <div className="flex justify-between">
        {path.map((item) => {
          return (
            <Link key={item.name} to={item.path}>
              <div
                className={`capitalize  cursor-pointer grid gap-2 justify-items-center`}
              >
                {item.name}
                {item.path === pathname && (
                  <span className="bg-color-orange w-[1rem] h-[1rem] rounded-full">
                    &nbsp;
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-end">
        <button
          className="bg-color-blue text-white rounded-2xl px-16 py-4"
          onClick={() => openLoginModal()}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
