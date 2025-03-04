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
      {menuItems.map((item, index) => (
        <li className={currentItem === index ? 'selected' : ''} key={index}>
          {item.link && item.link !== '' ? (
            <Link
              onClick={() => handleClick(index)}
              href={item.link}
              data-index={index}
            >
              {item.name}
            </Link>
          ) : (
            <span>{item.name}</span>
          )}
        </li>
      ))}
    </nav>
  );
};
