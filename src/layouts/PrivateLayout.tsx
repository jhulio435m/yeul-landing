import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/private/Sidebar';
import Header from '../components/private/Header';

const PrivateLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
      />
      
      <div className={`transition-all duration-300 ${sidebarOpen ? 'lg:ml-72' : 'lg:ml-72'}`}>
        <Header toggleSidebar={toggleSidebar} />
        
        <main className="p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PrivateLayout;