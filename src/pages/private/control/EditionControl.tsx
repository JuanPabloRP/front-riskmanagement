import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ControlType } from '../../../shared/interfaces/controls';
import { Button, TextInput, Label, Select } from 'flowbite-react';
import RM_Button from '../../../shared/components/RM_Button';
import { PATHS } from '../../../shared/constants/routes.constant';
import BackButton from '../../../shared/components/BackButton';

const EditControl = () => {
	// Estado para el formulario de edición
	const [control, setControl] = useState<ControlType>({
		id: 0,
		Nombre: "",
		tipo: "",
		descripcion: "",
		identificacion: "",
		riesgoAsociado: "",
		FechaImplementacion: "",
		estado: "",
		responsable: "",

	});

	const navigate = useNavigate();


	// Función para actualizar los campos del control
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (control) {
			setControl({
				...control,
				[e.target.name]: e.target.value || "",  // Establece un valor vacío por defecto si es necesario
			});
		}
	};

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setControl(prevControl => ({
			...prevControl,
			riesgoAsociado: e.target.value,
			Nombre: prevControl.Nombre ?? "", // Definir valores predeterminados para propiedades obligatorias
			tipo: prevControl.tipo ?? "",
			descripcion: prevControl.descripcion ?? "",
			identificacion: prevControl.identificacion ?? "",
			FechaImplementacion: prevControl.FechaImplementacion ?? "",
			estado: prevControl.estado ?? "",
			responsable: prevControl.responsable ?? "",
		}));
	};

	const handleSave = () => {
		// Lógica para guardar cambios (ej., llamada a la API para actualizar)
		// Navegar de vuelta o mostrar mensaje de confirmación
		navigate('/ListaControles');
	};

	const irGC = () => {
		navigate(`${PATHS.private.controls.base}`);
	};

	return (
		<form
			 className="flex justify-center items-center max-w-2xl flex-col gap-4 mx-auto min-h-full px-3 mt-10"
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
			 <h1 className="text-text-primary text-center text-3xl">Editar Control</h1>
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
						 value={control.Nombre}
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
						 value={control.tipo}
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
						 value={control.descripcion}
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
						 value={control.identificacion}
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
						 value={control.FechaImplementacion}
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
					 <Select id="estado" name="estado" required defaultValue="" onChange={handleSelectChange} value={control.estado}>
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
					 <Select id="riesgoAsociado" name="riesgoAsociado" required defaultValue="" onChange={handleSelectChange} value={control.riesgoAsociado}>
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
					 <Select id="responsable" name="responsable" required defaultValue="" onChange={handleSelectChange} value={control.responsable}>
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
			 <RM_Button onClick={handleSave}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2"> <path d="M12 5l0 14"></path> <path d="M5 12l14 0"></path> </svg> 
				 Guardar Cambios
			 </RM_Button>
			 <br />
			 <br />
		 </form>
		/*<>
			<BackButton path={PATHS.private.controls.base} />
			<h1>HOlla</h1>
		</>*/
	);
};

export default EditControl;

