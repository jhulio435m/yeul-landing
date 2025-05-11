import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { CheckCircle, XCircle, FileInput, ArrowRight } from 'lucide-react';

const ProjectValidationPage = () => {
  const [projectCode, setProjectCode] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [validationResult, setValidationResult] = useState<{ success: boolean; message: string } | null>(null);
  const { verifyProject, currentUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsValidating(true);
    setValidationResult(null);

    try {
      // Auto-fill for demo
      const code = projectCode || 'CLT-2025-001';
      
      const isValid = await verifyProject(code);

      if (isValid) {
        setValidationResult({
          success: true,
          message: 'Código de proyecto válido. Redirigiendo al dashboard...'
        });
        
        // Redirect based on user role after a delay
        setTimeout(() => {
          if (currentUser?.role === 'client') {
            navigate('/dashboard/client');
          } else if (currentUser?.role === 'engineer') {
            navigate('/dashboard/engineer');
          } else if (currentUser?.role === 'admin') {
            navigate('/dashboard/admin');
          }
        }, 1500);
      } else {
        setValidationResult({
          success: false,
          message: 'Código de proyecto inválido. Verifica e intenta nuevamente.'
        });
      }
    } catch (err) {
      setValidationResult({
        success: false,
        message: 'Ocurrió un error durante la validación.'
      });
    } finally {
      setIsValidating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-primary-600 px-6 py-8 text-white">
          <h1 className="text-2xl font-bold">Validación de Proyecto</h1>
          <p className="mt-2 text-primary-100">
            Ingresa el código de tu proyecto para acceder al expediente técnico.
          </p>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="projectCode" className="block text-sm font-medium text-gray-700 mb-1">
                Código de Proyecto
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FileInput size={18} className="text-gray-400" />
                </div>
                <input
                  id="projectCode"
                  name="projectCode"
                  type="text"
                  value={projectCode}
                  onChange={(e) => setProjectCode(e.target.value)}
                  placeholder="CLT-2025-001"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Formato del código: CLT-YYYY-XXX
              </p>
            </div>

            {validationResult && (
              <div className={`p-4 rounded-md ${
                validationResult.success ? 'bg-success/10 text-success' : 'bg-error/10 text-error'
              }`}>
                <div className="flex">
                  <div className="flex-shrink-0">
                    {validationResult.success ? (
                      <CheckCircle className="h-5 w-5 text-success" />
                    ) : (
                      <XCircle className="h-5 w-5 text-error" />
                    )}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">
                      {validationResult.message}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isValidating}
                className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isValidating ? (
                  'Validando...'
                ) : (
                  <>
                    Verificar Proyecto
                    <ArrowRight size={16} className="ml-2" />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              ¿No conoces tu código de proyecto?{' '}
              <a href="#" className="font-medium text-primary-600 hover:text-primary-500">
                Contacta a soporte
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectValidationPage;