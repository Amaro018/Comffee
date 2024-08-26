import React from 'react';
import Link from 'next/link';

type SidebarProps = {
  items: { label: string; path: string; image?: string }[]; // image is optional
};

const Sidebar = () => {

  const items = [
    { label: 'Comffee Dashboard', path: '/admin/dashboard', image: '/images/white.png' },
   
    { label: 'Products', path: '/admin/users' },
    { label: 'Categories', path: '/admin/settings' },
    { label: 'Users', path: '/admin/users' },
    { label: 'Settings', path: '/admin/settings' },
  ];
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <ul>
        {items.map((item, index) => (
          <li key={index} className="mb-4 flex items-center">
            {item.image && (
              <img src={item.image} alt={item.label} className="w-12 h-12 mr-2" />
            )}
            <Link href={item.path}>
              {item.label}
            </Link>ra
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
