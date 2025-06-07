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

// Private Pages - Admin
import AdminDashboardPage from '../pages/private/admin/AdminDashboardPage';
import AdminConsultingPage from '../pages/private/admin/AdminConsultingPage';
import AdminLicensesPage from '../pages/private/admin/AdminLicensesPage';
import AdminMembersPage from '../pages/private/admin/AdminMembersPage';
import AdminSettingsPage from '../pages/private/admin/AdminSettingsPage';

// Private Pages - Member
import MemberDashboardPage from '../pages/private/member/MemberDashboardPage';
import MemberProjectsPage from '../pages/private/member/MemberProjectsPage';
import MemberDocumentsPage from '../pages/private/member/MemberDocumentsPage';
import MemberProfilePage from '../pages/private/member/MemberProfilePage';

// Private Pages - Client
import ClientDashboardPage from '../pages/private/client/ClientDashboardPage';
import ClientProjectsPage from '../pages/private/client/ClientProjectsPage';
import ClientDocumentsPage from '../pages/private/client/ClientDocumentsPage';
import ClientProfilePage from '../pages/private/client/ClientProfilePage';

const PrivateRoute = ({ children, allowedRoles }: { children: JSX.Element, allowedRoles?: string[] }) => {
  const { isAuthenticated, currentUser } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  if (allowedRoles && currentUser && !allowedRoles.includes(currentUser.role)) {
    if (currentUser.role === 'client') {
      return <Navigate to="/dashboard/client\" replace />;
    } else if (currentUser.role === 'member') {
      return <Navigate to="/dashboard/member" replace />;
    } else if (currentUser.role === 'admin') {
      return <Navigate to="/dashboard/admin\" replace />;
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

      {/* Private Routes - Admin */}
      <Route path="/dashboard/admin" element={
        <PrivateRoute allowedRoles={['admin']}>
          <PrivateLayout />
        </PrivateRoute>
      }>
        <Route index element={<AdminDashboardPage />} />
        <Route path="consulting" element={<AdminConsultingPage />} />
        <Route path="licenses" element={<AdminLicensesPage />} />
        <Route path="members" element={<AdminMembersPage />} />
        <Route path="settings" element={<AdminSettingsPage />} />
      </Route>

      {/* Private Routes - Member */}
      <Route path="/dashboard/member" element={
        <PrivateRoute allowedRoles={['member']}>
          <PrivateLayout />
        </PrivateRoute>
      }>
        <Route index element={<MemberDashboardPage />} />
        <Route path="projects" element={<MemberProjectsPage />} />
        <Route path="documents" element={<MemberDocumentsPage />} />
        <Route path="profile" element={<MemberProfilePage />} />
      </Route>

      {/* Private Routes - Client */}
      <Route path="/dashboard/client" element={
        <PrivateRoute allowedRoles={['client']}>
          <PrivateLayout />
        </PrivateRoute>
      }>
        <Route index element={<ClientDashboardPage />} />
        <Route path="projects" element={<ClientProjectsPage />} />
        <Route path="documents" element={<ClientDocumentsPage />} />
        <Route path="profile" element={<ClientProfilePage />} />
      </Route>

      <Route path="*" element={<Navigate to="/\" replace />} />
    </Routes>
  );
};

export default AppRoutes;