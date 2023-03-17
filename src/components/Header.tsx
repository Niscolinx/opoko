import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const path = ['home', 'about-us', 'pricing'] as const;
  const [pathToSwitch, setPathToSwitch] = useState('home');

  console.log({ pathToSwitch });

  return (
    <div className="flex items-center justify-between">
      <img src="/asset/logo.svg" alt="" className="w-[12rem]" />
      <div className="flex gap-8">
        {path.map((item) => {
          console.log({ item, pathToSwitch });
          return (
            <Link key={item} to={`/${item}`}>
              <>
                <input
                  type="radio"
                  name="header"
                  id={item}
                  checked={item === pathToSwitch}
                  className="hidden"
                  onChange={() => setPathToSwitch(item)}
                />
                <label
                  htmlFor={item}
                  className={`capitalize  cursor-pointer grid gap-2 justify-items-center`}
                >
                  {item.replace('-', ' ')}
                  {item === pathToSwitch && (
                    <span className="bg-color-orange w-[1rem] h-[1rem] rounded-full">
                      &nbsp;
                    </span>
                  )}
                </label>
              </>
            </Link>
          );
        })}
      </div>
      <button className="bg-gray-300 rounded-2xl px-16 py-4">Login</button>
    </div>
  );
};

export default Header;
