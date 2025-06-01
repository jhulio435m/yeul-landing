import { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Save, Globe, Bell, Lock, Moon, Sun } from 'lucide-react';
import SectionHeading from '../../../components/common/SectionHeading';

const AdminSettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div className="p-6">
      <SectionHeading
        title="Configuración"
        subtitle="Personaliza la configuración de tu cuenta y del sistema"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* General Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-sm p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Settings size={20} className="mr-2" />
            Configuración General
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Idioma del Sistema
              </label>
              <select className="w-full rounded-lg border border-gray-300 p-2">
                <option value="es">Español</option>
                <option value="en">English</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Zona Horaria
              </label>
              <select className="w-full rounded-lg border border-gray-300 p-2">
                <option value="America/Lima">América/Lima (GMT-5)</option>
                <option value="America/New_York">América/New York (GMT-4)</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Modo Oscuro</span>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  darkMode ? 'bg-primary-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  darkMode ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Notification Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg shadow-sm p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Bell size={20} className="mr-2" />
            Notificaciones
          </h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Notificaciones por Email
              </span>
              <input type="checkbox" className="rounded text-primary-600" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Notificaciones del Sistema
              </span>
              <input type="checkbox" className="rounded text-primary-600" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Alertas de Seguridad
              </span>
              <input type="checkbox" className="rounded text-primary-600" defaultChecked />
            </div>
          </div>
        </motion.div>

        {/* Security Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Lock size={20} className="mr-2" />
            Seguridad
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña Actual
              </label>
              <input
                type="password"
                className="w-full rounded-lg border border-gray-300 p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nueva Contraseña
              </label>
              <input
                type="password"
                className="w-full rounded-lg border border-gray-300 p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirmar Nueva Contraseña
              </label>
              <input
                type="password"
                className="w-full rounded-lg border border-gray-300 p-2"
              />
            </div>
          </div>
        </motion.div>

        {/* System Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg shadow-sm p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Globe size={20} className="mr-2" />
            Sistema
          </h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Modo Mantenimiento
              </span>
              <input type="checkbox" className="rounded text-primary-600" />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Registro de Actividad
              </span>
              <input type="checkbox" className="rounded text-primary-600" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Copias de Seguridad Automáticas
              </span>
              <input type="checkbox" className="rounded text-primary-600" defaultChecked />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Save Button */}
      <div className="mt-6 flex justify-end">
        <button className="flex items-center px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          <Save size={20} className="mr-2" />
          Guardar Cambios
        </button>
      </div>
    </div>
  );
};

export default AdminSettingsPage;