import { Fragment, useState } from 'react';

const Header = () => {
  const path = ['home', 'about', 'pricing'] as const;
  const [pathToSwitch, setPathToSwitch] = useState('home');

  return (
    <div className=''>
        <img src="/asset/logo.svg" alt="" className='w-[12rem]'/>
      <div className="radioBox">
      
          {path.map((item) => {
            return (
              <Fragment key={item}>
                <input
                  type="radio"
                  name="header"
                  id={item}
                  checked={item === pathToSwitch}
                  className="hidden"
                  onChange={() => setPathToSwitch(item)}
                />
                <label htmlFor={item} className={`capitalize`}>
                  {item}
                </label>
              </Fragment>
            );
          })}
    
      </div>
    </div>
  );
};

export default Header;
