import React from 'react';
import SectionHeading from '../../components/common/SectionHeading';

const ClientsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionHeading
        title="Nuestros Clientes"
        subtitle="Empresas que confían en nosotros"
      />
      <div className="mt-12">
        {/* Client content will be added here */}
        <p className="text-center text-gray-600">
          Lista de clientes en construcción...
        </p>
      </div>
    </div>
  );
};

export default ClientsPage;