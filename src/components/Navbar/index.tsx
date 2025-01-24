import Link from 'next/link';

import { menuItems } from './menuItems';
import { useState } from 'react';

export const Navbar = () => {
  const [currentItem, setCurrentItem] = useState(0);

  function handleClick(index) {
    setCurrentItem(index);
  }
  return (
    <nav>
      {menuItems.map(
        (item, index) =>
          item.link &&
          item.link !== '' && (
            <li className={currentItem === index ? 'selected' : ''} key={index}>
              <Link
                onClick={() => handleClick(index)}
                href={item.link}
                data-index={index}
              >
                {item.name}
              </Link>
            </li>
          )
      )}
    </nav>
  );
};
