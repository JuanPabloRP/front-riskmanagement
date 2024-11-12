import React, { useState, useEffect } from 'react';
import { ControlType } from '../../../shared/interfaces/controls';
import RM_Input from '../../../shared/components/RM_Input';
import RM_Button from '../../../shared/components/RM_Button';
import { useNavigate, useLocation } from 'react-router-dom';
import { PATHS } from '../../../shared/constants/routes.constant';
import RM_Link from '../../../shared/components/RM_Link';

const ListaControles: React.FC = () => {
    const navigate = useNavigate();
    const ncontrol = useLocation();
    const nuevoControl = ncontrol.state as ControlType | undefined; // Manejo seguro del tipo `undefined`

    const irANC = () => {
        navigate(PATHS.private.controls.create);
    };

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

    useEffect(() => {
        if (nuevoControl) {
            setControles(prevControles => [...prevControles, nuevoControl]);
        }
    }, [nuevoControl]);

    const eliminarControl = (id?: number) => {
        setControles(controles.filter(control => control.id !== id));
    };

    const verDetalles = (id: number) => {
        navigate(`${PATHS.private.controls.monitor}/${id}`);
    };


    return (
        <div className="flex justify-center items-center max-w-2xl flex-col gap-4 mx-auto min-h-full px-3 mt-10">
            <h1 className="text-text-primary text-center text-3xl">Controles Implementados</h1>
            <RM_Button onClick={irANC}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                    <path d="M12 5v14"></path>
                    <path d="M5 12h14"></path>
                </svg>
                Agregar Control
            </RM_Button>
            <ul className="flex flex-col md:flex-row flex-wrap justify-between items-start gap-4 text-text-primary w-full">
                {controles.map(control => (
                    <li key={control.id} className="bg-white shadow-md rounded-lg p-4 w-full md:w-[calc(50%-1rem)]">
                        <div className="flex flex-col items-start space-y-2 text-black">
                            <header className="w-full flex items-center justify-between mt-2">
                                <p className="text-2xl font-bold">{control.Nombre}</p>
                                <div className="flex gap-1">
                                    <RM_Link to={`${PATHS.private.controls.edit}/${control.id}`} variant="button" color="neutral">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                                            <path d="M3 19h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
                                            <path d="M12.5 5.5l4 4"></path>
                                        </svg>
                                    </RM_Link>
                                    <RM_Button onClick={() => eliminarControl(control.id)} variant="danger">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                                            <path d="M4 7h16"></path>
                                            <path d="M10 11v6"></path>
                                            <path d="M14 11v6"></path>
                                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                                        </svg>
                                    </RM_Button>
                                </div>
                            </header>
                            <section>
                                <div className="flex gap-2">
                                    <span className={`icon ${control.estado === "Activo" ? "text-text-success" : "text-text-danger"}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                            <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
                                            <path d="M12 12m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0" />
                                        </svg>
                                    </span>
                                    <span>{control.identificacion}</span>
                                </div>
                                <p>Tipo {control.tipo}</p>
                                <p>{control.descripcion}</p>
                                <p>Riesgo Asociado: {control.riesgoAsociado}</p>
                                <p>Fecha Implementación: {control.FechaImplementacion}</p>
                                <p>Responsable: {control.responsable}</p>
                                <RM_Button onClick={() => verDetalles(control.id)}>Ver Detalle</RM_Button>
                            </section>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaControles;

