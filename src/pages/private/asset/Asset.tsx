import React, { useState } from 'react';

const Asset = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    value: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Activo registrado:', formData);
    // Aquí podrías agregar la lógica para enviar el formulario a un backend o guardar el activo
  };

  return (
    <section className="flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-center text-xl font-bold text-blue-500 mb-6">Registrar Activo</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Nombre del Activo</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 text-gray-900"
              placeholder="Ingrese el nombre del activo"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Ubicación del Activo</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 text-gray-900"
              placeholder="Ingrese la ubicación del activo"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Valor del Activo</label>
            <input
              type="number"
              name="value"
              value={formData.value}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 text-gray-900"
              placeholder="Ingrese el valor del activo"
            />
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded mt-4">
            Registrar Activo
          </button>
        </form>
      </div>
    </section>
  );
};

export default Asset;
