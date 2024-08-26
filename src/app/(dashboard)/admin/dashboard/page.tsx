// pages/admin/dashboard.tsx
import React from 'react';
import Sidebar from '../../../components/Sidebar';

const DashboardPage: React.FC = () => {


  return (
    <div className="flex">
      
      <main className="flex-grow p-4 bg-gray-100">
        <h1 className="text-2xl font-bold">Dashboard Content</h1>
        {/* Other content */}
      </main>
    </div>
  );
};

export default DashboardPage;
