import { 
  FileText, Download, Eye, MessageSquare, 
  CheckCircle, Clock, XCircle, FileQuestion 
} from 'lucide-react';
import { ProjectDocument } from '../../../types';

interface DocumentListProps {
  documents: ProjectDocument[];
  section: string;
}

const DocumentList: React.FC<DocumentListProps> = ({ documents, section }) => {
  const filteredDocuments = documents.filter(doc => doc.section === section);
  
  // Status icon and color
  const getStatusDetails = (status: string) => {
    const statusMap: Record<string, { icon: React.ReactNode; color: string; text: string }> = {
      pending: {
        icon: <Clock size={16} />,
        color: 'text-warning',
        text: 'Pendiente'
      },
      in_review: {
        icon: <FileQuestion size={16} />,
        color: 'text-primary-600',
        text: 'En Revisión'
      },
      approved: {
        icon: <CheckCircle size={16} />,
        color: 'text-success',
        text: 'Aprobado'
      },
      rejected: {
        icon: <XCircle size={16} />,
        color: 'text-error',
        text: 'Rechazado'
      }
    };
    
    return statusMap[status] || {
      icon: <FileText size={16} />,
      color: 'text-gray-500',
      text: status
    };
  };
  
  // File type icon
  const getFileTypeIcon = (type: string) => {
    const iconMap: Record<string, { icon: React.ReactNode; color: string }> = {
      pdf: {
        icon: <FileText size={20} />,
        color: 'text-error'
      },
      xlsx: {
        icon: <FileText size={20} />,
        color: 'text-success'
      },
      dxf: {
        icon: <FileText size={20} />,
        color: 'text-primary-600'
      },
      jpg: {
        icon: <FileText size={20} />,
        color: 'text-yellow-500'
      }
    };
    
    return iconMap[type] || {
      icon: <FileText size={20} />,
      color: 'text-gray-500'
    };
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm">
      {filteredDocuments.length > 0 ? (
        <div className="divide-y divide-gray-200">
          {filteredDocuments.map((doc) => {
            const statusDetails = getStatusDetails(doc.status);
            const fileTypeDetails = getFileTypeIcon(doc.type);
            
            return (
              <div key={doc.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  {/* Document icon and details */}
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded bg-gray-100 ${fileTypeDetails.color}`}>
                      {fileTypeDetails.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{doc.name}</h3>
                      <div className="flex items-center mt-1 text-sm text-gray-500">
                        <span className="uppercase">{doc.type}</span>
                        <span className="mx-2">•</span>
                        <span>{new Date(doc.uploadDate).toLocaleDateString()}</span>
                        <span className="mx-2">•</span>
                        <span>Por: {doc.uploader}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Status and actions */}
                  <div className="flex items-center space-x-2">
                    <span className={`flex items-center text-sm ${statusDetails.color}`}>
                      {statusDetails.icon}
                      <span className="ml-1">{statusDetails.text}</span>
                    </span>
                    
                    <div className="flex space-x-1">
                      <button className="p-1 text-gray-500 hover:text-primary-600 rounded-full hover:bg-gray-100">
                        <Eye size={18} />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-primary-600 rounded-full hover:bg-gray-100">
                        <Download size={18} />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-primary-600 rounded-full hover:bg-gray-100">
                        <MessageSquare size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="p-8 text-center">
          <FileText size={40} className="mx-auto text-gray-300 mb-2" />
          <p className="text-gray-500">No hay documentos disponibles en esta sección.</p>
        </div>
      )}
    </div>
  );
};

export default DocumentList;