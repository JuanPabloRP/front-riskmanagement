import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ControlType } from '../../../shared/interfaces/controls';
import RM_Button from '../../../shared/components/RM_Button';
import { PATHS } from '../../../shared/constants/routes.constant';
import { useLocation, useNavigate } from 'react-router-dom';
import BackButton from '../../../shared/components/BackButton';

const MonitoreoControl: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [control, setControl] = useState<ControlType | null>({} as ControlType);
    const [seguimiento, setSeguimiento] = useState<string>('Sin seguimiento');
    const [efectividad, setEfectividad] = useState<number>(0);

    useEffect(() => {
        if (id) {
            setControl((prevState) => ({
                ...prevState,
                id: parseInt(id),
                Nombre: "Control " + id,
                tipo: "Tipo A",
                descripcion: "Descripción del Control " + id,
                identificacion: "123456",
                riesgoAsociado: "Riesgo A",
                FechaImplementacion: new Date().toLocaleDateString(),
                estado: "Activo",
                responsable: "Juan Pérez"
            }));
            setSeguimiento(`Seguimiento inicial siendo de ${control?.descripcion} para ${control?.Nombre}`);
            setEfectividad(Math.floor(Math.random() * 100));
        }
    }, []);

    if (!control) {
        return <p className='text-text-primary text-center text-3xl'>Cargando...</p>;
    }

    const navigate = useNavigate();

    

    return (

        <div>
            <div className='flex justify-center pb-4'>
                <BackButton path={PATHS.private.controls.base} />
                    
               
            </div>
            <h1 className="text-text-primary text-center text-3xl">Seguimiento de control</h1>
            <div className='flex justify-between items-center border-b border-gray-300 py-2 px-4'>
                <h1 className="text-text-primary text-center text-3xl">{control.Nombre}</h1>
                <div className="flex justify-between items-center border-b border-gray-300 py-2 px-4">
                    <div className="w-1/4 text-left">
                        <h2 className="font-bold text-lg">Riesgo Asociado</h2>
                        <p>{control.riesgoAsociado}</p>
                    </div>
                    <div className="w-1/2 text-left">
                        <h2 className="font-bold text-lg">Seguimiento del Control</h2>
                        <p>{seguimiento}</p>
                    </div>
                    <div className="w-1/4 text-left">
                        <h2 className="font-bold text-lg">Efectividad (%)</h2>
                        <p className="text-green-600 font-semibold">{efectividad}%</p>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default MonitoreoControl;
