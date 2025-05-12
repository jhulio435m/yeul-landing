import { 
  Users, Briefcase, 
  Clock, Calendar, 
  BarChart2, DollarSign, 
  CheckCircle, AlertCircle,
  ArrowUp, ArrowDown
} from 'lucide-react';
import { projects } from '../../../mockData';

const AdminDashboardPage = () => {
  // Stats for the dashboard
  const stats = [
    {
      id: 1,
      title: 'Proyectos Activos',
      value: projects.filter(p => p.status === 'in_progress').length,
      previousValue: 4,
      change: '+20%',
      isPositive: true,
      icon: <Briefcase className="text-primary-600" />,
      color: 'bg-primary-50 text-primary-700'
    },
    {
      id: 2,
      title: 'Proyectos Pendientes',
      value: projects.filter(p => p.status === 'pending').length,
      previousValue: 3,
      change: '-33%',
      isPositive: true,
      icon: <Clock className="text-warning" />,
      color: 'bg-warning/10 text-warning'
    },
    {
      id: 3,
      title: 'Proyectos Completados',
      value: projects.filter(p => p.status === 'completed').length,
      previousValue: 0,
      change: '+100%',
      isPositive: true,
      icon: <CheckCircle className="text-success" />,
      color: 'bg-success/10 text-success'
    },
    {
      id: 4,
      title: 'Usuarios Activos',
      value: 15,
      previousValue: 12,
      change: '+25%',
      isPositive: true,
      icon: <Users className="text-secondary-600" />,
      color: 'bg-secondary-50 text-secondary-700'
    }
  ];

  // Alerts (demonstration data)
  const alerts = [
    { 
      id: 1, 
      title: 'Documentos pendientes de revisión', 
      description: '5 documentos esperando aprobación',
      severity: 'warning',
      time: 'Hace 2 días'
    },
    { 
      id: 2, 
      title: 'Proyecto acercándose a la fecha límite', 
      description: 'Puente Vehicular Norte - 10 días restantes',
      severity: 'error',
      time: 'Actualizado hoy'
    },
    { 
      id: 3, 
      title: 'Nuevo cliente registrado', 
      description: 'Desarrollos Urbanos S.A. ha sido registrado',
      severity: 'info',
      time: 'Hace 1 día'
    },
  ];

  return (
    <div>
      {/* Welcome message */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Panel de Administración
          </h1>
          <p className="text-gray-600">
            Administra, supervisa y analiza la información de todos los proyectos y usuarios del sistema.
          </p>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Calendar size={16} className="mr-1" />
          {new Date().toLocaleDateString('es-MX', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map(stat => (
          <div key={stat.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">{stat.title}</span>
                <span className="text-3xl font-bold mt-1">{stat.value}</span>
                <div className={`flex items-center text-xs mt-2 ${
                  stat.isPositive ? 'text-success' : 'text-error'
                }`}>
                  {stat.isPositive ? (
                    <ArrowUp size={12} className="mr-1" />
                  ) : (
                    <ArrowDown size={12} className="mr-1" />
                  )}
                  <span>{stat.change} vs mes anterior</span>
                </div>
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
        {/* Alerts section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <AlertCircle size={20} className="mr-2 text-primary-600" />
            Alertas del Sistema
          </h2>
          
          <div className="space-y-4">
            {alerts.map(alert => (
              <div 
                key={alert.id} 
                className={`p-4 rounded-lg ${
                  alert.severity === 'error' 
                    ? 'bg-error/10 border-l-4 border-error' 
                    : alert.severity === 'warning'
                      ? 'bg-warning/10 border-l-4 border-warning'
                      : 'bg-primary-50 border-l-4 border-primary-600'
                }`}
              >
                <h3 className={`font-medium ${
                  alert.severity === 'error' 
                    ? 'text-error' 
                    : alert.severity === 'warning'
                      ? 'text-warning'
                      : 'text-primary-600'
                }`}>
                  {alert.title}
                </h3>
                <p className="text-sm text-gray-700 mt-1">{alert.description}</p>
                <span className="text-xs text-gray-500 mt-2 block">{alert.time}</span>
              </div>
            ))}
          </div>
          
          <button className="mt-4 w-full text-center text-sm text-primary-600 hover:text-primary-700">
            Ver todas las alertas
          </button>
        </div>
        
        {/* Financial overview (simulated) */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <DollarSign size={20} className="mr-2 text-primary-600" />
            Resumen Financiero
          </h2>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">Ingresos Totales</h3>
                <span className="text-sm text-gray-500">Este mes</span>
              </div>
              <span className="text-xl font-bold text-success">$547,000</span>
            </div>
            
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">Gastos Operativos</h3>
                <span className="text-sm text-gray-500">Este mes</span>
              </div>
              <span className="text-xl font-bold text-error">$235,600</span>
            </div>
            
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">Proyectos Pendientes</h3>
                <span className="text-sm text-gray-500">Valor estimado</span>
              </div>
              <span className="text-xl font-bold text-primary-600">$1.2M</span>
            </div>
          </div>
        </div>
        
        {/* Projects summary */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <BarChart2 size={20} className="mr-2 text-primary-600" />
            Resumen de Proyectos
          </h2>
          
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-success/10 rounded-lg">
                <span className="block text-2xl font-bold text-success">
                  {projects.filter(p => p.status === 'completed').length}
                </span>
                <span className="text-xs text-gray-600">Completados</span>
              </div>
              <div className="p-3 bg-warning/10 rounded-lg">
                <span className="block text-2xl font-bold text-warning">
                  {projects.filter(p => p.status === 'pending').length}
                </span>
                <span className="text-xs text-gray-600">Pendientes</span>
              </div>
              <div className="p-3 bg-primary-50 rounded-lg">
                <span className="block text-2xl font-bold text-primary-600">
                  {projects.filter(p => p.status === 'in_progress').length}
                </span>
                <span className="text-xs text-gray-600">En Progreso</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Proyectos por Sector</h3>
              
              {/* Simplified chart visualization */}
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Infraestructura Vial</span>
                    <span className="font-medium">40%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Comercial</span>
                    <span className="font-medium">25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Infraestructura Hídrica</span>
                    <span className="font-medium">20%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Salud</span>
                    <span className="font-medium">15%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;