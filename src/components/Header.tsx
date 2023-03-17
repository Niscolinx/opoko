import { Fragment, useState } from 'react';

const Header = () => {
  const path = ['home', 'about', 'pricing'] as const;
  const [pathToSwitch, setPathToSwitch] = useState('home');

  return (
    <div className=''>
      <div className="radioBox">
        <div>
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
    </div>
  );
};

export default Header;
