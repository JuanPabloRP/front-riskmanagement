import React, { useState } from 'react';
import { ControlType } from '../../shared/interfaces/controls';
import RM_Input from '../../shared/components/RM_Input';
import RM_Button from '../../shared/components/RM_Button';


const ListaControles: React.FC = () => {
    // Estado para almacenar la lista de controles con el tipo ControlType
    const [controles, setControles] = useState<ControlType[]>([
        {
            id: 1,
            Nombre: "Control 1",
            tipo: "Tipo A",
            descripcion: "Descripción del Control 1",
            identificacion: "123456",
            riesgoAsociado: "Riesgo A",
            FechaImplementacion: new Date().toLocaleDateString(),
            estado: "Activo",
            responsable: "Juan Pérez"
        },
        {
            id: 2,
            Nombre: "Control 2",
            tipo: "Tipo B",
            descripcion: "Descripción del Control 2",
            identificacion: "789012",
            riesgoAsociado: "Riesgo B",
            FechaImplementacion: new Date().toLocaleDateString(),
            estado: "Inactivo",
            responsable: "María López"
        }
    ]);

    // Función para agregar un nuevo control
    const agregarControl = (nuevoControl: ControlType) => {
        setControles([...controles, nuevoControl]);
    };

    // Función para eliminar un control por id
    const eliminarControl = (id?: number) => {
        setControles(controles.filter(control => control.id !== id));
    };

    return (
        <div>
            <h1>Lista de Controles</h1>
            <ul>
                {controles.map(control => (
                    <li key={control.id} className="control-item">
                        <div>
                            <strong>{control.Nombre}</strong> - {control.tipo}
                            <p>{control.descripcion}</p>
                            <p>Identificación: {control.identificacion}</p>
                            <p>Riesgo Asociado: {control.riesgoAsociado}</p>
                            <p>Fecha Implementación: {control.FechaImplementacion}</p>
                            <p>Estado: {control.estado}</p>
                            <p>Responsable: {control.responsable}</p>
                        </div>
                        <div className="control-buttons">
                            <RM_Button onClick={() => alert(`Ver detalles de ${control.Nombre}`)}>Ver Detalle</RM_Button>
                            <RM_Button onClick={() => alert(`Editar ${control.Nombre}`)}>Editar</RM_Button>
                            <RM_Button onClick={() => eliminarControl(control.id)}>Eliminar</RM_Button>
                        </div>
                    </li>
                ))}
            </ul>
            {/* Botón para simular agregar un nuevo control */}
            <RM_Button onClick={() => agregarControl({
                id: controles.length + 1,
                Nombre: `Control ${controles.length + 1}`,
                tipo: "Tipo C",
                descripcion: "Nuevo control",
                identificacion: `${controles.length + 100000}`,
                riesgoAsociado: "Riesgo C",
                FechaImplementacion: new Date().toLocaleDateString(),
                estado: "Activo",
                responsable: "Responsable X"
            })}>
                Agregar Control
            </RM_Button>
        </div>
    );
};

export default ListaControles;
