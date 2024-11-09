import React from 'react';

const AssetList = () => {
	// Datos de ejemplo para mostrar activos
	const assets = [
		{ id: 777, name: 'Nombre de activo', type: 'Tipo de activo' },
		{ id: 778, name: 'Nombre de activo', type: 'Tipo de activo' },
		{ id: 779, name: 'Nombre de activo', type: 'Tipo de activo' },
	];

	return (
		<section className="p-6">
			<h2 className="text-center text-xl font-bold text-blue-500 mb-4">
				Activos
			</h2>

			<div className="flex justify-between items-center mb-4">
				<button className="bg-gray-200 text-blue-500 py-2 px-4 rounded">
					Añadir Activo +
				</button>

				<div className="flex items-center gap-2">
					<input
						type="text"
						placeholder="ID"
						className="border border-gray-300 rounded p-2 text-gray-900"
					/>
					<input
						type="text"
						placeholder="NOMBRE"
						className="border border-gray-300 rounded p-2 text-gray-900"
					/>
					<input
						type="text"
						placeholder="TIPO"
						className="border border-gray-300 rounded p-2 text-gray-900"
					/>
					<button className="bg-blue-500 text-white py-2 px-4 rounded">
						BUSCAR
					</button>
					<a href="#" className="text-blue-500 underline">
						Ver historial...
					</a>
				</div>
			</div>

			<div className="bg-gray-100 p-4 rounded-lg shadow-md">
				<div className="grid grid-cols-4 font-semibold text-gray-700 mb-2">
					<div>ID</div>
					<div>NOMBRE</div>
					<div>TIPO</div>
					<div className="text-right">Acciones</div>
				</div>

				{assets.map((asset) => (
					<div
						key={asset.id}
						className="grid grid-cols-4 items-center bg-gray-200 p-2 rounded-lg mb-2"
					>
						<div className="text-gray-800 font-semibold">{asset.id}</div>
						<div className="text-gray-800 font-semibold">{asset.name}</div>
						<div className="text-gray-800 font-semibold">{asset.type}</div>
						<div className="text-right space-x-4">
							<button className="text-blue-500">Editar</button>
							<button className="text-blue-500">Eliminar</button>
							<button className="text-blue-500">Ver más...</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default AssetList;
