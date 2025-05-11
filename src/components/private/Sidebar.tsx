import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  Home, User, FileText, BarChart2, 
  Settings, LogOut, PanelLeft, ChevronRight, 
  ChevronLeft, Users, Briefcase, FileBarChart, 
  MessageSquare, Bell
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getNavItems = () => {
    // Base nav items for client
    if (currentUser?.role === 'client') {
      return [
        { icon: <Home size={20} />, name: 'Inicio', path: '/dashboard/client' },
        { icon: <Briefcase size={20} />, name: 'Mis Proyectos', path: '/dashboard/client/projects' },
        { icon: <MessageSquare size={20} />, name: 'Comentarios', path: '/dashboard/client/comments' },
        { icon: <User size={20} />, name: 'Mi Perfil', path: '/dashboard/client/profile' },
      ];
    } 
    // Engineer nav items
    else if (currentUser?.role === 'engineer') {
      return [
        { icon: <Home size={20} />, name: 'Inicio', path: '/dashboard/engineer' },
        { icon: <Briefcase size={20} />, name: 'Proyectos Asignados', path: '/dashboard/engineer/projects' },
        { icon: <FileBarChart size={20} />, name: 'Reportes', path: '/dashboard/engineer/reports' },
        { icon: <Users size={20} />, name: 'Clientes', path: '/dashboard/engineer/clients' },
        { icon: <User size={20} />, name: 'Mi Perfil', path: '/dashboard/engineer/profile' },
      ];
    } 
    // Admin nav items
    else if (currentUser?.role === 'admin') {
      return [
        { icon: <Home size={20} />, name: 'Inicio', path: '/dashboard/admin' },
        { icon: <Briefcase size={20} />, name: 'Todos los Proyectos', path: '/dashboard/admin/projects' },
        { icon: <Users size={20} />, name: 'Usuarios', path: '/dashboard/admin/users' },
        { icon: <BarChart2 size={20} />, name: 'Estadísticas', path: '/dashboard/admin/stats' },
        { icon: <Settings size={20} />, name: 'Configuración', path: '/dashboard/admin/settings' },
      ];
    }
    
    // Default fallback
    return [
      { icon: <Home size={20} />, name: 'Inicio', path: '/dashboard' },
    ];
  };

  const navItems = getNavItems();

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full bg-white shadow-lg transition-all duration-300 ease-in-out transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } w-64 lg:w-72`}
      >
        {/* Sidebar header */}
        <div className="h-16 flex items-center justify-between px-4 border-b">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-primary-600 rounded-md flex items-center justify-center mr-2">
              <span className="text-white text-sm font-bold">IT</span>
            </div>
            <span className="text-lg font-bold text-gray-900">
              Ingen<span className="text-yellow-500">Tech</span>
            </span>
          </div>
          
          {/* Mobile close button */}
          <button
            className="lg:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setSidebarOpen(false)}
          >
            <ChevronLeft size={20} />
          </button>
        </div>

        {/* User info */}
        <div className="px-4 py-5 border-b">
          <div className="flex items-center">
            {currentUser?.avatar ? (
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="h-10 w-10 rounded-full object-cover"
              />
            ) : (
              <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-primary-700 font-medium">
                  {currentUser?.name.charAt(0)}
                </span>
              </div>
            )}
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{currentUser?.name}</p>
              <p className="text-xs text-gray-500">
                {currentUser?.role === 'client' && 'Cliente'}
                {currentUser?.role === 'engineer' && 'Ingeniero'}
                {currentUser?.role === 'admin' && 'Administrador'}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="py-4 flex flex-col h-[calc(100%-160px)] overflow-y-auto">
          <nav className="flex-1 px-2 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${isActive 
                    ? 'bg-primary-50 text-primary-600' 
                    : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Bottom actions */}
          <div className="px-2 mt-auto">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <LogOut size={20} className="mr-3" />
              Cerrar sesión
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;