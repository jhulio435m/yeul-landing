import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Search, User, PanelLeft, Home } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="bg-white h-16 px-4 flex items-center justify-between border-b border-gray-200 sticky top-0 z-10">
      {/* Left section */}
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="text-gray-500 hover:text-gray-700 focus:outline-none lg:hidden"
        >
          <PanelLeft size={20} />
        </button>
        
        <button
          onClick={() => navigate('/')}
          className="ml-4 flex items-center text-gray-500 hover:text-gray-700"
        >
          <Home size={18} className="mr-1" />
          <span className="text-sm">Ir al Sitio</span>
        </button>
      </div>

      {/* Search bar - center */}
      <div className="hidden md:block flex-1 max-w-lg mx-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Buscar proyectos, documentos..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <div className="relative">
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <Bell size={20} />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center h-4 w-4 rounded-full bg-yellow-500 text-white text-xs">
              3
            </span>
          </button>
        </div>

        {/* User menu */}
        <div className="relative">
          <div className="flex items-center">
            {currentUser?.avatar ? (
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="h-8 w-8 rounded-full object-cover cursor-pointer"
              />
            ) : (
              <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center cursor-pointer">
                <User size={16} className="text-primary-700" />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;