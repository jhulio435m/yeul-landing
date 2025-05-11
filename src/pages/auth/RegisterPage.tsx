import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import RegisterForm from '../../components/auth/RegisterForm';

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Image */}
      <div 
        className="md:w-1/2 bg-cover bg-center hidden md:block"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        }}
      >
        <div className="h-full bg-primary-900/70 flex items-center justify-center p-12">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold text-white mb-6">
              Únete a YEUL Perú
            </h1>
            <p className="text-gray-200 text-lg">
              Accede a nuestro portal de expedientes técnicos y servicios de ingeniería especializados.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Registration Form */}
      <div className="md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8 md:hidden">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Únete a YEUL Perú
            </h1>
            <p className="text-gray-600">
              Crea tu cuenta para acceder a nuestros servicios
            </p>
          </div>

          {/* Back to home link */}
          <div className="mb-8">
            <Link 
              to="/"
              className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors"
            >
              <ChevronLeft size={18} className="mr-1" />
              Volver al inicio
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Registro de Usuario
            </h2>
            <RegisterForm />
          </motion.div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              ¿Ya tienes una cuenta?{' '}
              <Link to="/login" className="font-medium text-primary-600 hover:text-primary-700">
                Iniciar sesión
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;