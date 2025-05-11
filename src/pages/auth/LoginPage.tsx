import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, ChevronLeft } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../../components/common/Button';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Auto-fill for demo purposes
      const demoEmail = email || 'cliente@ingentech.com';
      
      const success = await login(demoEmail, password || 'password123');

      if (success) {
        navigate('/validar-proyecto');
      } else {
        setError('Credenciales inválidas. Por favor, intenta de nuevo.');
      }
    } catch (err) {
      setError('Ocurrió un error durante el inicio de sesión.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Image */}
      <div 
        className="md:w-1/2 bg-cover bg-center hidden md:block"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        }}
      >
        <div className="h-full bg-primary-900/70 flex items-center justify-center p-12">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold text-white mb-6">
              Portal de Acceso a Clientes
            </h1>
            <p className="text-gray-200 text-lg">
              Accede a tu cuenta para revisar el estado de tus proyectos, documentos técnicos y más.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8 md:hidden">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Portal de Acceso a Clientes
            </h1>
            <p className="text-gray-600">
              Accede a tu cuenta para revisar tus proyectos
            </p>
          </div>

          {/* Back to home link */}
          <div className="mb-8">
            <Button 
              to="/"
              variant="ghost"
              icon={<ChevronLeft size={18} />}
              iconPosition="left"
              className="text-gray-600"
            >
              Volver al sitio
            </Button>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Iniciar Sesión
            </h2>

            {error && (
              <div className="bg-error/10 text-error p-4 rounded-md text-sm">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={18} className="text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="cliente@ingentech.com"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Contraseña
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={18} className="text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Recordarme
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-primary-600 hover:text-primary-500">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              ¿No tienes una cuenta?{' '}
              <a href="#" className="font-medium text-primary-600 hover:text-primary-500">
                Solicitar acceso
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;