// src/pages/private/vulnerabilities/CreateVulnerabilities.tsx

import React, { useState } from 'react';
import VulnerabilityForm from './components/VulnerabilityForm'; // Asegúrate de que la ruta sea correcta
import { Button } from 'flowbite-react'; // Importa el botón de Flowbite
import { fetchMethod, MethodType } from '../../../utils/fetchMethod'; // Importa la función para hacer peticiones
import { notifySuccess, notifyError } from '../../../utils/toast'; // Importa las funciones de notificación

const CreateVulnerabilities: React.FC = () => {
  const [showForm, setShowForm] = useState(false); // Estado para mostrar u ocultar el formulario

  // Función para manejar la creación de vulnerabilidades
  const handleCreate = async (formData: any) => {
    try {
      await fetchMethod('/api/vulnerabilities', MethodType.POST, formData); // Llama a la API para crear la vulnerabilidad
      notifySuccess('Vulnerabilidad creada exitosamente'); // Notificación de éxito
      setShowForm(false); // Ocultar el formulario después de crear
    } catch (error) {
      notifyError('Error al crear la vulnerabilidad'); // Notificación de error
    }
  };

  return (
    <div>
      <h1>Registrar Vulnerabilidad</h1>
      <Button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancelar' : 'Agregar Vulnerabilidad'}
      </Button>
      {showForm && <VulnerabilityForm onSubmit={handleCreate} />} {/* Mostrar el formulario si showForm es true */}
    </div>
  );
};

export default CreateVulnerabilities;
