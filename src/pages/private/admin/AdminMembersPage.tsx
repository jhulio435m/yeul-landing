import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Plus, Search, Mail, Phone, Edit, Trash2 } from 'lucide-react';
import SectionHeading from '../../../components/common/SectionHeading';

const AdminMembersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for members
  const members = [
    {
      id: 1,
      name: 'Ana Rodriguez',
      role: 'Ingeniero Senior',
      email: 'member@yeul.pe',
      phone: '+51 987 654 321',
      status: 'active',
      projects: 5,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    // Add more mock members as needed
  ];

  return (
    <div className="p-6">
      <SectionHeading
        title="Gestión de Miembros"
        subtitle="Administra los miembros del equipo y sus permisos"
      />

      {/* Actions Bar */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Buscar miembro..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          <Plus size={20} className="mr-2" />
          Nuevo Miembro
        </button>
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-600">
                  <Mail size={16} className="mr-2" />
                  <span className="text-sm">{member.email}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone size={16} className="mr-2" />
                  <span className="text-sm">{member.phone}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  member.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {member.status === 'active' ? 'Activo' : 'Inactivo'}
                </span>
                <span className="text-sm text-gray-500">
                  {member.projects} proyectos asignados
                </span>
              </div>

              <div className="mt-6 flex space-x-2">
                <button className="flex-1 flex items-center justify-center px-4 py-2 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors">
                  <Edit size={16} className="mr-2" />
                  Editar
                </button>
                <button className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <Trash2 size={16} className="mr-2" />
                  Eliminar
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdminMembersPage;