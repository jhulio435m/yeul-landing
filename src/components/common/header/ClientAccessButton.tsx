import { Link } from 'react-router-dom';

const ClientAccessButton: React.FC<{ isAuthenticated: boolean; userRole?: string }> = ({ isAuthenticated, userRole }) => {
  const getDashboardPath = () => {
    switch (userRole) {
      case 'admin': return '/dashboard/admin';
      case 'engineer': return '/dashboard/engineer';
      case 'member': return '/dashboard/member';
      case 'client': return '/dashboard/client';
      default: return '/dashboard/client';
    }
  };

  const targetPath = isAuthenticated ? getDashboardPath() : '/login';

  return (
    <Link
      to={targetPath}
      className={`
        inline-block
        font-semibold
        px-5 py-2 rounded-md
        bg-yellow-500 hover:bg-yellow-400
        text-white
        dark:bg-yellow-500 dark:hover:bg-yellow-400 
        transition-all duration-300
        shadow-button dark:shadow-md
        hover:shadow-button-hover
      `}
    >
      {isAuthenticated ? 'Mi Dashboard' : 'Acceso Clientes'}
    </Link>
  );
};

export default ClientAccessButton;