import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Settings, Plus, Search } from 'lucide-react';
import SectionHeading from '../../../components/common/SectionHeading';

const AdminConsultingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for consulting firms
  const consultingFirms = [
    {
      id: 1,
      name: 'Ingeniería Avanzada S.A.C.',
      status: 'active',
      members: 15,
      projects: 8,
      lastActive: '2024-03-15'
    },
    // Add more mock data as needed
  ];

  return (
    <div className="p-6">
      <SectionHeading
        title="Gestión de Consultoras"
        subtitle="Administra y supervisa las consultoras registradas en el sistema"
      />

      {/* Actions Bar */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Buscar consultora..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          <Plus size={20} className="mr-2" />
          Nueva Consultora
        </button>
      </div>

      {/* Consulting Firms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {consultingFirms.map((firm) => (
          <motion.div
            key={firm.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{firm.name}</h3>
              <span className={`px-3 py-1 rounded-full text-sm ${
                firm.status === 'active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {firm.status === 'active' ? 'Activo' : 'Inactivo'}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <Users size={18} className="mr-2" />
                <span>{firm.members} miembros</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Building2 size={18} className="mr-2" />
                <span>{firm.projects} proyectos</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Settings size={18} className="mr-2" />
                <span>Última actividad: {new Date(firm.lastActive).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="mt-6 flex space-x-3">
              <button className="flex-1 px-4 py-2 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors">
                Ver Detalles
              </button>
              <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Configurar
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdminConsultingPage;