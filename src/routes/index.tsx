import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

// Layouts
import PublicLayout from '../layouts/PublicLayout';
import PrivateLayout from '../layouts/PrivateLayout';

// Public Pages
import HomePage from '../pages/public/HomePage';
import AboutPage from '../pages/public/AboutPage';
import ServicesPage from '../pages/public/ServicesPage';
import ProjectsPage from '../pages/public/ProjectsPage';
import ClientsPage from '../pages/public/ClientsPage';
import ContactPage from '../pages/public/ContactPage';
import BlogPostPage from "../pages/public/BlogPostPage";
import ProjectDetailPage from '../pages/public/ProjectDetailPage';

// Auth Pages
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import ProjectValidationPage from '../pages/auth/ProjectValidationPage';

// Private Pages
import ClientDashboardPage from '../pages/private/client/ClientDashboardPage';
import ProjectExpedientPage from '../pages/private/client/ProjectExpedientPage';
import EngineerDashboardPage from '../pages/private/engineer/EngineerDashboardPage';
import AdminDashboardPage from '../pages/private/admin/AdminDashboardPage';

const PrivateRoute = ({ children, allowedRoles }: { children: JSX.Element, allowedRoles?: string[] }) => {
  const { isAuthenticated, currentUser } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  if (allowedRoles && currentUser && !allowedRoles.includes(currentUser.role)) {
    if (currentUser.role === 'client') {
      return <Navigate to="/dashboard/client" replace />;
    } else if (currentUser.role === 'engineer') {
      return <Navigate to="/dashboard/engineer" replace />;
    } else if (currentUser.role === 'admin') {
      return <Navigate to="/dashboard/admin" replace />;
    }
  }
  
  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="nosotros" element={<AboutPage />} />
        <Route path="servicios" element={<ServicesPage />} />
        <Route path="proyectos" element={<ProjectsPage />} />
        <Route path="proyectos/:id" element={<ProjectDetailPage />} />
        <Route path="clientes" element={<ClientsPage />} />
        <Route path="blog" element={<BlogPostPage />} />
        <Route path="blog/:id" element={<BlogPostPage />} />
        <Route path="contacto" element={<ContactPage />} />
      </Route>

      {/* Auth Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/validar-proyecto" element={
        <PrivateRoute>
          <ProjectValidationPage />
        </PrivateRoute>
      } />

      {/* Private Routes */}
      <Route path="/dashboard" element={<PrivateLayout />}>
        <Route path="client" element={
          <PrivateRoute allowedRoles={['client']}>
            <ClientDashboardPage />
          </PrivateRoute>
        } />
        <Route path="client/project/:id" element={
          <PrivateRoute allowedRoles={['client']}>
            <ProjectExpedientPage />
          </PrivateRoute>
        } />
        <Route path="engineer" element={
          <PrivateRoute allowedRoles={['engineer']}>
            <EngineerDashboardPage />
          </PrivateRoute>
        } />
        <Route path="admin" element={
          <PrivateRoute allowedRoles={['admin']}>
            <AdminDashboardPage />
          </PrivateRoute>
        } />
      </Route>

      {/* Fallback Route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;