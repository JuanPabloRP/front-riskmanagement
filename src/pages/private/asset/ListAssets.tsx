import React, { useState } from 'react';

const ListAssets = () => {
  const [asset, setAsset] = useState({
    name: '',
    location: '',
    value: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAsset((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Activo registrado:', asset);
  };

  return (
    <section className="flex items-center justify-center p-3 h-screen">
      <div className="w-full max-w-md">
        
        <h1 className="text-center text-3xl font-bold mb-6">Registrar Activo</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold">Nombre del Activo</label>
            <input
              type="text"
              id="name"
              name="name"
              value={asset.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="location" className="block text-sm font-semibold">Ubicación del Activo</label>
            <input
              type="text"
              id="location"
              name="location"
              value={asset.location}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="value" className="block text-sm font-semibold">Valor del Activo</label>
            <input
              type="number"
              id="value"
              name="value"
              value={asset.value}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Registrar Activo
          </button>
        </form>
      </div>
    </section>
  );
};

export default ListAssets;
