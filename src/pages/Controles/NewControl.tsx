import { useState } from 'react';
import { UserType } from '../../shared/interfaces/user.interface';
import { ControlType } from '../../shared/interfaces/controls';
// Flowbite
import { Button, Label, Select, TextInput } from 'flowbite-react';

// Constants
import { ROLES } from '../../shared/constants/user-roles.constant';
import { PATHS } from '../../shared/constants/routes.constant';


// Enums
import { MethodType, ResponseType } from '../../shared/enums/httpEnums';

// Utils
import { notifyError, notifySuccess } from '../../utils/toast';
import { fetchMethod } from '../../utils/fetchMethod';

// Components
import BackButton from '../../shared/components/BackButton';
import { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { UserRolesEnum } from '../../shared/enums/user-roles.enum';
import RM_Input from '../../shared/components/RM_Input';
import RM_Button from '../../shared/components/RM_Button';
import ListaControles from './EditionControl';

const NewControl = () => {

	const navigate = useNavigate();

	const [nuevoControl, setNuevoControl] = useState<ControlType>({
    	id: 0,
		Nombre: "",
		tipo: "",
		descripcion: "",
		identificacion: "",
		riesgoAsociado: "",
		FechaImplementacion: '',
		estado: "",
		responsable: ""
	});

	const Validacion = (e: React.FormEvent<HTMLFormElement>) => {
    	e.preventDefault();

    	if (
			!nuevoControl?.Nombre ||
			!nuevoControl?.tipo ||
			!nuevoControl?.descripcion ||
			!nuevoControl?.identificacion ||
			!nuevoControl?.riesgoAsociado ||
			!nuevoControl?.FechaImplementacion ||
			!nuevoControl?.estado ||
			!nuevoControl?.responsable
		) {
			notifyError('Por favor llena todos los campos');
			return;
		}

		if (nuevoControl?.estado === '') {
			notifyError('Selecciona un estado');
			return;
		}

		if (nuevoControl?.riesgoAsociado === '') {
			notifyError('Selecciona un riesgo');
			return;
		}

		if (nuevoControl?.responsable === '') {
			notifyError('Selecciona un responsable');
			return;
		}

    	console.log(nuevoControl);
    	notifySuccess('control registrado correctamente');
	};

	{/*const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    	const target = e.target as HTMLInputElement;
    	const [nombre, value] = [target?.name, target?.value];

    	setNuevoControl({
        	...nuevoControl,
        	[nombre]: value,
    	} as ControlType);
	};*/}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNuevoControl({
            ...nuevoControl,
            [e.target.name]: e.target.value
        });
    };

	const getNextId = () => {
		const lastId = parseInt(localStorage.getItem("controlId") || "0", 10);
		const newId = lastId + 1;
		localStorage.setItem("controlId", newId.toString());
		return newId;
	};

	const SubirForm = () => {
		setNuevoControl(prevControl => ({ ...prevControl, id: getNextId() }));
        navigate(`${PATHS.private.controls.base}`, { state: nuevoControl });
    };

    const irGC = () => {
        navigate(`${PATHS.private.controls.base}`);
    };


    return(
        <form
		    className="flex justify-center items-center max-w-2xl flex-col gap-4 mx-auto min-h-full px-3 mt-10"
		    onSubmit={Validacion}
		    //onChange={handleChange}
		>
		    <RM_Button onClick={irGC}><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M5 12l14 0" />
					<path d="M5 12l6 6" />
					<path d="M5 12l6 -6" />
				</svg> 
				Regresar
			</RM_Button> 
		    <h1 className="text-text-primary text-center text-3xl">Registrar Nuevo Control</h1>
		    <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-text-primary w-full">
			    <div className="w-full">
					<div className="mb-2 block">
				    	<Label
					    	htmlFor="name"
							value="Nombre"
					    	className="text-text-primary"
				    	/>
				    </div>
				    <TextInput //organizar esto***********************
					    id="nombre"
					    name="Nombre"
					    type="text"
						value={nuevoControl.Nombre}
						onChange={handleChange}
						placeholder="Nombre del control"
						required
				    />
			    </div>
			    <div className="w-full">
				    <div className="mb-2 block">
						<Label
							htmlFor="lastName"
					    	value="Tipo de control"
					    	className="text-text-primary"
						/>
				    </div>
				    <TextInput
						id="tipo"
						name="tipo"
						type="text"
						value={nuevoControl.tipo}
						onChange={handleChange}
						placeholder="tipo de control"
						required
				    />
			    </div>
		    </div>

			<div className="flex flex-col md:flex-row  justify-center items-center gap-2  text-text-primary  w-full">
				<div className=" w-full">
			    	<div className="mb-2 block">
				    	<Label
					    	htmlFor="password"
					    	value="Descripción"
					    	className="text-text-primary"
						/>
				    </div>
				    <TextInput id="descripcion" 
						name="descripcion" 
						type="text" 
						value={nuevoControl.descripcion}
						onChange={handleChange}
						placeholder="Descripción del control" 
						required
					/>
			    </div>
			    <div className=" w-full">
					<div className="mb-2 block">
					    <Label
						    htmlFor="passwordConfirmation"
							value="Identificación"
							className="text-text-primary"
					    />
					</div>
				    <TextInput
					    id="identificacion"
						name="identificacion"
						type="number"
						min={1000000}
						max={9999999999}
						value={nuevoControl.identificacion}
						onChange={handleChange}
						placeholder='Identificación del control'
						required
					/>
				</div>
			</div>
			<div className="flex flex-col md:flex-row  justify-center items-center gap-2  text-text-primary  w-full">
				<div className=" w-full">
					<div className="mb-2 block">
						<Label
							htmlFor="birthDate"
							value="Fecha de implementación"
							className="text-text-primary"
						/>
					</div>
				    <TextInput 
						id="fechaimplementacion" 
						name="FechaImplementacion" 
						type="date" 
						required
						value={nuevoControl.FechaImplementacion}
						onChange={handleChange} />
			    </div>
			    <div className=" w-full">
					<div className="mb-2 block">
				    	<Label
							htmlFor="identification"
					    	value="Estado"
							className="text-text-primary"
				    	/>
					</div>
					<Select id="estado" name="estado" required defaultValue="" onChange={(e) => setNuevoControl({ ...nuevoControl, estado: e.target.value })} value={nuevoControl.estado}>
						<option key={-1} value="" disabled hidden>
					    	Selecciona un estado
						</option>
						<option value="opcion1">Activo</option>
    					<option value="opcion2">Inactivo</option>
				    </Select>
				</div>
			</div>
			<div className="flex flex-col md:flex-row  justify-center items-center gap-2  text-text-primary  w-full">
				<div className=" w-full">
					<div className="mb-2 block">
				    	<Label
					    	htmlFor="rol"
					    	value="Selecciona un Riesgo Asociado"
							className="text-text-primary"
						/>
					</div>
					<Select id="riesgoAsociado" name="riesgoAsociado" required defaultValue="" onChange={(e) => setNuevoControl({ ...nuevoControl, riesgoAsociado: e.target.value })} value={nuevoControl.riesgoAsociado}>
						<option key={-1} value="" disabled hidden>
					    	Selecciona un riesgo
						</option>
						<option value="opcion1">Opción 1</option>
    					<option value="opcion2">Opción 2</option>
    					<option value="opcion3">Opción 3</option>
				    </Select>
			    </div>
		    </div>
			<div className="flex flex-col md:flex-row  justify-center items-center gap-2  text-text-primary  w-full">
				<div className=" w-full">
					<div className="mb-2 block">
				    	<Label
					    	htmlFor="rol"
					    	value="Selecciona un Responsable del control"
							className="text-text-primary"
						/>
					</div>
					<Select id="responsable" name="responsable" required defaultValue="" onChange={(e) => setNuevoControl({ ...nuevoControl, responsable: e.target.value })} value={nuevoControl.responsable}>
						<option key={-1} value="" disabled hidden>
					    	Selecciona un responsable
						</option>
						<option value="opcion1">Opción 1</option>
    					<option value="opcion2">Opción 2</option>
    					<option value="opcion3">Opción 3</option>
				    </Select>
			    </div>
		    </div>
			<br />
			<RM_Button onClick={SubirForm}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2"> <path d="M12 5l0 14"></path> <path d="M5 12l14 0"></path> </svg> 
                Agregar Control
            </RM_Button>
			<br />
			<br />

			{/*<div className="flex flex-col md:flex-row gap-2 w-full">
			    <RM_Input
					value={InformacionControl?.Nombre}
					onChange={(value) => handleChange2('firstName', value as string)}
					label="Nombre"
				/>
				<RM_Input
					value={InformacionControl?.Nombre}
					onChange={(value) => handleChange2('lastName', value as string)}
					error={InformacionControl.Nombre.length < 3 ? 'corto' : ''}
					placeholder="tukiti"
					required
					type="text"
					label="Apellidos"
					icon={
			    		<svg
				    		xmlns="http://www.w3.org/2000/svg"
				    		width="24"
				    		height="24"
				    		viewBox="0 0 24 24"
				    		fill="none"
							stroke="currentColor"
				    		stroke-width="2"
				    		stroke-linecap="round"
				    		stroke-linejoin="round"
				    		className="icon icon-tabler icons-tabler-outline icon-tabler-a-b-2 text-border-secondary"
							>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				    		<path d="M16 21h3c.81 0 1.48 -.67 1.48 -1.48l.02 -.02c0 -.82 -.69 -1.5 -1.5 -1.5h-3v3z" />
				    		<path d="M16 15h2.5c.84 -.01 1.5 .66 1.5 1.5s-.66 1.5 -1.5 1.5h-2.5v-3z" />
				    		<path d="M4 9v-4c0 -1.036 .895 -2 2 -2s2 .964 2 2v4" />
							<path d="M2.99 11.98a9 9 0 0 0 9 9m9 -9a9 9 0 0 0 -9 -9" />
				    		<path d="M8 7h-4" />
				    	</svg>
			    	}
			    />
		    </div>
			<div className="flex flex-col md:flex-row gap-2 w-full">
			<RM_Input
				value={InformacionControl?.Nombre}
				onChange={(value) => handleChange2('password', value as string)}
				label="Contraseña"
				type="password"
			/>
			<RM_Input
			    value={InformacionControl?.Nombre}
				onChange={(value) =>
				handleChange2('passwordConfirmation', value as string)
				}
				error={
					InformacionControl.Nombre !== InformacionControl.Nombre
					? 'La contraseña no coincide'
				    	: ''
				}
				label="Repetir contraseña"
				type="password"
			/>
		    </div>
			<div className="flex flex-col md:flex-row gap-2 w-full">
				<RM_Input
					value={InformacionControl?.Nombre}
					onChange={(value) => handleChange2('birthDate', value as string)}
					label="Fecha de nacimiento"
					type="date"
				/>

				<RM_Input
					value={InformacionControl?.Nombre}
					onChange={(value) => handleChange2('identification', value as string)}
					label="Cédula"
					type="number"
					placeholder="1007234567"
					min={1000000}
					max={9999999999}
			    />
		    </div>
		    <div className="flex flex-col md:flex-row gap-2 w-full"></div>
			<Toaster position="top-right" />*/}
		</form>
    )
}


export default NewControl