// src/pages/private/vulnerabilities/ListVulnerabilities.tsx

import React, { useEffect, useState } from 'react';
import { fetchMethod, MethodType } from '../../../utils/fetchMethod'; // Importa la función para hacer peticiones
import { notifyError } from '../../../utils/toast'; // Importa las funciones de notificación

const ListVulnerabilities: React.FC = () => {
  const [vulnerabilities, setVulnerabilities] = useState<any[]>([]); // Estado para almacenar las vulnerabilidades
  const [loading, setLoading] = useState(true); // Estado para manejar la carga

  // Función para obtener la lista de vulnerabilidades
  const fetchVulnerabilities = async () => {
    try {
      const data = await fetchMethod('/api/vulnerabilities', MethodType.GET); // Llama a la API para obtener las vulnerabilidades
      setVulnerabilities(data); // Asigna los datos al estado
    } catch (error) {
      notifyError('Error al cargar las vulnerabilidades'); // Notificación de error
    } finally {
      setLoading(false); // Finaliza la carga
    }
  };

  useEffect(() => {
    fetchVulnerabilities(); // Llama a la función al cargar el componente
  }, []);

  if (loading) {
    return <p>Cargando vulnerabilidades...</p>; // Mensaje de carga
  }

  return (
    <div>
      <h1>Lista de Vulnerabilidades</h1>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Descripción</th>
            <th className="border border-gray-300 p-2">Fecha de Creación</th>
          </tr>
        </thead>
        <tbody>
          {vulnerabilities.map((vulnerability) => (
            <tr key={vulnerability.id}>
              <td className="border border-gray-300 p-2">{vulnerability.id}</td>
              <td className="border border-gray-300 p-2">{vulnerability.description}</td>
              <td className="border border-gray-300 p-2">{new Date(vulnerability.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListVulnerabilities;
