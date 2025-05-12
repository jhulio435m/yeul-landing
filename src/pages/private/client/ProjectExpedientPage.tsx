import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ChevronLeft, FileText, FileBarChart, ClipboardCheck, MapPin, 
  Calendar, Briefcase, Building, Info, Camera, Map, File, 
  BarChart, MessageSquare, LayoutList
} from 'lucide-react';
import { projects, projectDocuments } from '../../../mockData';
import DocumentList from '../../../components/private/client/DocumentList';

const ProjectExpedientPage = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState(projects.find(p => p.id === id));
  const [activeSection, setActiveSection] = useState('Datos Generales');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  // Format date function
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-MX', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };
  
  // Get documents for this project
  const projectDocs = projectDocuments.filter(doc => doc.projectId === id);
  
  // Define sections
  const sections = [
    { id: 'general', name: 'Datos Generales', icon: <Info size={18} /> },
    { id: 'studies', name: 'Estudios Previos', icon: <FileText size={18} /> },
    { id: 'budget', name: 'Presupuesto', icon: <FileBarChart size={18} /> },
    { id: 'additional', name: 'Documentación Adicional', icon: <File size={18} /> },
    { id: 'progress', name: 'Progreso por Sección', icon: <BarChart size={18} /> },
    { id: 'topography', name: 'Levantamiento Topográfico', icon: <Map size={18} /> },
    { id: 'reports', name: 'Informes', icon: <ClipboardCheck size={18} /> },
    { id: 'photos', name: 'Fotografías', icon: <Camera size={18} /> },
    { id: 'coords', name: 'Coordenadas', icon: <MapPin size={18} /> },
    { id: 'plans', name: 'Planos DXF', icon: <LayoutList size={18} /> },
    { id: 'supervision', name: 'Supervisión de Obra', icon: <Building size={18} /> },
    { id: 'log', name: 'Bitácora', icon: <Briefcase size={18} /> },
    { id: 'visits', name: 'Visitas de Campo', icon: <MapPin size={18} /> },
    { id: 'quality', name: 'Control de Calidad', icon: <ClipboardCheck size={18} /> },
    { id: 'tech_reports', name: 'Informes técnicos', icon: <FileText size={18} /> },
    { id: 'files', name: 'Archivos y Planos', icon: <File size={18} /> },
  ];
  
  if (!project) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 mb-4">Proyecto no encontrado</p>
        <Link
          to="/dashboard/client"
          className="inline-flex items-center text-primary-600 hover:text-primary-700"
        >
          <ChevronLeft size={16} className="mr-1" />
          Volver al dashboard
        </Link>
      </div>
    );
  }
  
  return (
    <div className="h-full">
      {/* Back button and header */}
      <div className="mb-6">
        <Link
          to="/dashboard/client"
          className="inline-flex items-center text-gray-600 hover:text-primary-600 mb-4"
        >
          <ChevronLeft size={16} className="mr-1" />
          Volver al dashboard
        </Link>
        
        <div className="flex flex-wrap justify-between items-start gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{project.name}</h1>
            <div className="flex items-center text-sm text-gray-600 mt-1">
              <Briefcase size={16} className="mr-1" />
              Código: {project.code}
              <span className="mx-2">•</span>
              <MapPin size={16} className="mr-1" />
              {project.location}
            </div>
          </div>
          
          {/* Project status */}
          <div className="flex flex-col items-end">
            <div className={`px-3 py-1 rounded-full text-sm font-medium mb-2 ${
              project.status === 'in_progress' 
                ? 'bg-primary-100 text-primary-700' 
                : project.status === 'completed'
                  ? 'bg-success/20 text-success'
                  : 'bg-warning/20 text-warning'
            }`}>
              {project.status === 'in_progress' && 'En Progreso'}
              {project.status === 'completed' && 'Completado'}
              {project.status === 'pending' && 'Pendiente'}
            </div>
            
            <div className="flex items-center text-sm text-gray-600">
              <Calendar size={16} className="mr-1" />
              Inicio: {formatDate(project.startDate)}
              {project.endDate && (
                <>
                  <span className="mx-2">•</span>
                  Fin: {formatDate(project.endDate)}
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between text-sm mb-1">
            <span className="font-medium">Progreso del Proyecto</span>
            <span className="font-bold">{project.progress}%</span>
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
      </div>
      
      {/* Main content with sidebar */}
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Sidebar navigation */}
        <div className={`md:w-64 bg-gray-50 border-r border-gray-200 transition-all duration-300 ${
          isSidebarOpen ? 'block' : 'hidden'
        }`}>
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="font-bold text-gray-800">Secciones</h2>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="md:hidden text-gray-500 hover:text-gray-700"
            >
              <ChevronLeft size={18} />
            </button>
          </div>
          <nav className="p-2">
            <ul className="space-y-1">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => setActiveSection(section.name)}
                    className={`w-full flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === section.name
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="mr-3">{section.icon}</span>
                    {section.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        {/* Main content */}
        <div className="flex-1 p-6">
          {/* Mobile toggle button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden mb-4 flex items-center text-sm text-gray-600 hover:text-gray-900"
          >
            <LayoutList size={18} className="mr-1" />
            {isSidebarOpen ? 'Ocultar secciones' : 'Mostrar secciones'}
          </button>
          
          <h2 className="text-xl font-bold mb-6 flex items-center text-gray-900">
            {sections.find(s => s.name === activeSection)?.icon}
            <span className="ml-2">{activeSection}</span>
          </h2>
          
          {activeSection === 'Datos Generales' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Información del Proyecto</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Cliente:</span>
                        <span className="font-medium">{project.client}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sector:</span>
                        <span className="font-medium">{project.sector}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Fecha de inicio:</span>
                        <span className="font-medium">{formatDate(project.startDate)}</span>
                      </div>
                      {project.endDate && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Fecha de finalización:</span>
                          <span className="font-medium">{formatDate(project.endDate)}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Descripción</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700">{project.description}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Imágenes del Proyecto</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Camera size={40} className="mx-auto mb-2 text-gray-400" />
                      No hay imágenes disponibles
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {/* Content for each section */}
          {activeSection !== 'Datos Generales' && (
            <DocumentList 
              documents={projectDocs} 
              section={activeSection}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectExpedientPage;