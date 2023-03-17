import { Fragment, useState } from 'react';

const Header = () => {
  const path = ['Home', 'About Us', 'Pricing'] as const;
  const [pathToSwitch, setPathToSwitch] = useState('');

  return (
    <div>
      <div className="radioBox">
        <div>
          {path.map((item) => {
            return (
              <Fragment key={item}>
                <input
                  type="radio"
                  name="history"
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
