import { 
  Users, Briefcase, 
  Clock, CheckCircle, 
  BarChart2, FileClock
} from 'lucide-react';
import { projects } from '../../../mockData';

const EngineerDashboardPage = () => {
  // Stats for the dashboard
  const stats = [
    {
      id: 1,
      title: 'Proyectos Asignados',
      value: projects.length,
      icon: <Briefcase className="text-primary-600" />,
      color: 'bg-primary-50 text-primary-700'
    },
    {
      id: 2,
      title: 'Pendientes de Revisión',
      value: 3,
      icon: <FileClock className="text-warning" />,
      color: 'bg-warning/10 text-warning'
    },
    {
      id: 3,
      title: 'Documentos Aprobados',
      value: 8,
      icon: <CheckCircle className="text-success" />,
      color: 'bg-success/10 text-success'
    },
    {
      id: 4,
      title: 'Clientes Activos',
      value: 5,
      icon: <Users className="text-secondary-600" />,
      color: 'bg-secondary-50 text-secondary-700'
    }
  ];

  // Recent activities (demonstration data)
  const activities = [
    { 
      id: 1, 
      action: 'Documento aprobado', 
      description: 'Plano Estructural Nivel 1 (Edificio Corporativo)',
      time: 'Hace 2 horas',
      icon: <CheckCircle size={16} className="text-success" />
    },
    { 
      id: 2, 
      action: 'Nuevo documento', 
      description: 'Memoria de Cálculo añadida a Puente Vehicular Norte',
      time: 'Hace 5 horas',
      icon: <Briefcase size={16} className="text-primary-600" />
    },
    { 
      id: 3, 
      action: 'Comentario de cliente', 
      description: 'Solicitud de información adicional en Planta de Tratamiento',
      time: 'Hace 1 día',
      icon: <Users size={16} className="text-yellow-500" />
    },
    { 
      id: 4, 
      action: 'Visita programada', 
      description: 'Visita de inspección a Edificio Corporativo Sustentable',
      time: 'En 2 días',
      icon: <Clock size={16} className="text-warning" />
    },
  ];

  return (
    <div>
      {/* Welcome message */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Panel de Ingeniero
        </h1>
        <p className="text-gray-600">
          Gestiona tus proyectos asignados, documentos y comunicación con clientes.
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
      
      {/* Dashboard content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming activities */}
        <div className="lg:col-span-1 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <Clock size={20} className="mr-2 text-primary-600" />
            Actividad Reciente
          </h2>
          
          <div className="space-y-4">
            {activities.map(activity => (
              <div key={activity.id} className="flex items-start pb-4 border-b border-gray-100 last:border-0">
                <div className="p-2 bg-gray-50 rounded-full mr-3">
                  {activity.icon}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{activity.action}</h3>
                  <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                  <span className="text-xs text-gray-500 mt-1">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Project progress chart (simulated) */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <BarChart2 size={20} className="mr-2 text-primary-600" />
            Progreso de Proyectos
          </h2>
          
          <div className="space-y-6">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-gray-900">{project.name}</h3>
                  <span className="text-sm font-medium">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${
                      project.status === 'completed' 
                        ? 'bg-success' 
                        : 'bg-primary-600'
                    }`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Inicio: {new Date(project.startDate).toLocaleDateString()}</span>
                  {project.endDate ? (
                    <span>Fin: {new Date(project.endDate).toLocaleDateString()}</span>
                  ) : (
                    <span>En progreso</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineerDashboardPage;