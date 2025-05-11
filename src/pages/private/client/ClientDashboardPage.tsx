import { useState } from 'react';
import { Search, Calendar, Filter, FileBarChart, DownloadCloud as CloudDownload, Clock, Briefcase, BarChart3 } from 'lucide-react';
import { projects } from '../../../mockData';
import ProjectCard from '../../../components/private/client/ProjectCard';

const ClientDashboardPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  // Filter projects based on search term and selected status
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.code.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
    
    return matchesSearch && matchesStatus;
  });

  // Stats for the dashboard
  const stats = [
    {
      id: 1,
      title: 'Proyectos Activos',
      value: projects.filter(p => p.status === 'in_progress').length,
      icon: <Briefcase className="text-primary-600" />,
      color: 'bg-primary-50 text-primary-700'
    },
    {
      id: 2,
      title: 'Proyectos Pendientes',
      value: projects.filter(p => p.status === 'pending').length,
      icon: <Clock className="text-warning" />,
      color: 'bg-warning/10 text-warning'
    },
    {
      id: 3,
      title: 'Proyectos Completados',
      value: projects.filter(p => p.status === 'completed').length,
      icon: <FileBarChart className="text-success" />,
      color: 'bg-success/10 text-success'
    },
    {
      id: 4,
      title: 'Total de Proyectos',
      value: projects.length,
      icon: <BarChart3 className="text-secondary-600" />,
      color: 'bg-secondary-50 text-secondary-700'
    }
  ];

  return (
    <div>
      {/* Welcome message */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          ¡Bienvenido a tu Dashboard!
        </h1>
        <p className="text-gray-600">
          Aquí puedes visualizar y gestionar todos tus proyectos de ingeniería.
        </p>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map(stat => (
          <div key={stat.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">{stat.title}</span>
                <span className="text-3xl font-bold mt-1">{stat.value}</span>
              </div>
              <div className={`p-3 rounded-full ${stat.color}`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <div className="flex-1 mb-4 md:mb-0">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar por nombre o código..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div>
              <label className="inline-flex items-center text-sm text-gray-700">
                <Filter size={18} className="mr-2 text-gray-400" />
                Estado:
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="ml-2 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-sm"
              >
                <option value="all">Todos</option>
                <option value="in_progress">En Progreso</option>
                <option value="pending">Pendientes</option>
                <option value="completed">Completados</option>
              </select>
            </div>
            
            <button className="flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              <CloudDownload size={18} className="mr-2 text-gray-400" />
              Exportar
            </button>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-5">
          <Calendar size={20} className="inline-block mr-2 text-primary-600" />
          Mis Proyectos
        </h2>
        
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No se encontraron proyectos con los filtros seleccionados.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientDashboardPage;