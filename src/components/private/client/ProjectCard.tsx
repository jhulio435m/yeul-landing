import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { Project } from '../../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Status badge
  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { label: string; color: string }> = {
      in_progress: {
        label: 'En Progreso',
        color: 'bg-primary-100 text-primary-700'
      },
      pending: {
        label: 'Pendiente',
        color: 'bg-warning/20 text-warning'
      },
      completed: {
        label: 'Completado',
        color: 'bg-success/20 text-success'
      }
    };

    const { label, color } = statusMap[status] || {
      label: status,
      color: 'bg-gray-100 text-gray-700'
    };

    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${color}`}>
        {label}
      </span>
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-MX', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      {/* Project Image */}
      <div className="h-40 overflow-hidden">
        <img
          src={project.image || 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600'}
          alt={project.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">{project.name}</h3>
            <div className="text-sm text-gray-500 mb-2">Código: {project.code}</div>
          </div>
          
          {getStatusBadge(project.status)}
        </div>
        
        {/* Date and location */}
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <Calendar size={16} className="mr-1" />
          <span>Inicio: {formatDate(project.startDate)}</span>
          {project.endDate && (
            <span className="ml-2">• Fin: {formatDate(project.endDate)}</span>
          )}
        </div>
        
        {/* Location and Sector */}
        <div className="mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">{project.location}</span>
            <span className="text-primary-600 font-medium">{project.sector}</span>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-3 mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Progreso</span>
            <span className="font-medium">{project.progress}%</span>
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
        </div>
        
        {/* Actions */}
        <Link
          to={`/dashboard/client/project/${project.id}`}
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 w-full justify-center"
        >
          Ver Expediente
          <ArrowUpRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;