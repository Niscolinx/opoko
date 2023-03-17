import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const path = ['home', 'about-us', 'pricing'] as const;
  const [pathToSwitch, setPathToSwitch] = useState('home');

  return (
    <div className="flex items-center justify-between">
      <img src="/asset/logo.svg" alt="" className="w-[12rem]" />
      <div className="flex gap-8">
        {path.map((item) => {
          return (
            <Link key={item} to={`/${item}`}>
              <input
                type="radio"
                name="header"
                id={item}
                checked={item === pathToSwitch}
                className="hidden"
                onChange={() => setPathToSwitch(item)}
              />
              <label htmlFor={item} className={`capitalize  cursor-pointer`}>
                {item.replace('-', ' ')}
                {item === pathToSwitch && <span className=""></span>}
              </label>
            </Link>
          );
        })}
      </div>
      <button className='bg-gray-300 rounded-2xl px-16 py-4'>Login</button>
    </div>
  );
};

export default Header;
