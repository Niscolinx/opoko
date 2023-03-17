import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const path = ['home', 'about-us', 'pricing'] as const;

  const location = useLocation();
  const { pathname } = location;
  
  return (
      <div className="flex items-center justify-between">
      <img src="/asset/logo.svg" alt="" className="w-[12rem]" />
      <div className="flex gap-8">
        {path.map((item) => {
        console.log(location.pathname, item);
          return (
            <Link key={item} to={`/${item}`}>
              <div
                className={`capitalize  cursor-pointer grid gap-2 justify-items-center`}
              >
                {item.replace('-', ' ')}
                {item === pathname && (
                  <span className="bg-color-orange w-[1rem] h-[1rem] rounded-full">
                    &nbsp;
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </div>
      <button className="bg-gray-300 rounded-2xl px-16 py-4">Login</button>
    </div>
  );
};

export default Header;
