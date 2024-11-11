import { useState } from 'react';
// Utils
import { notifyError } from '../../../shared/components/RM_Toast';

// Components
import { Toaster } from 'react-hot-toast';
import RM_Input from '../../../shared/components/RM_Input';
import RM_Select from '../../../shared/components/RM_Select';
import RM_Button from '../../../shared/components/RM_Button';
import RM_Link from '../../../shared/components/RM_Link';
import { PATHS } from '../../../shared/constants/routes.constant';

const TreatmentPlanCreate = () => {
	const [treatmentPlan, setTreatmentPlan] = useState({
		planName: '',
		description: '',
		startDate: '',
		endDate: '',
		responsible: '',
		status: 'Active',
	});
	/*const API_URL = import.meta.env.VITE_API_URL;*/

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validación de campos obligatorios
		if (
			!treatmentPlan.planName ||
			!treatmentPlan.description ||
			!treatmentPlan.startDate ||
			!treatmentPlan.responsible
		) {
			notifyError('Por favor llena todos los campos obligatorios');
			return;
		}

		// Llamada a la API para crear el plan de tratamiento
		/*fetchMethod(
			`${API_URL}/v1/treatmentPlan`,
			MethodType.POST,
			treatmentPlan,
			ResponseType.JSON,
			undefined,
			true
		).then(() => {
			notifySuccess('Plan de Tratamiento creado correctamente');
		}).catch(() => {
			notifyError('Hubo un error al crear el Plan de Tratamiento');
		});*/
	};

	const handleChange = (field, value) => {
		setTreatmentPlan((prevPlan) => ({
			...prevPlan,
			[field]: value,
		}));
	};

	return (
		<form
			className="flex justify-center items-center max-w-2xl flex-col gap-4 mx-auto min-h-full px-3 mt-10"
			onSubmit={handleSubmit}
		>
			<RM_Link
				to={PATHS.private.treatmentPlan.base}
				hasBackground={false}
				color="primary"
				icon={
					<svg
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
				}
			>
				<></>
			</RM_Link>
			<h1 className="text-text-primary text-center text-3xl">
				Crear Plan de Tratamiento
			</h1>

			{/* Nombre del Plan */}
			<RM_Input
				value={treatmentPlan.planName}
				onChange={(value) => handleChange('planName', value)}
				label="Nombre del Plan"
				required
				error={
					treatmentPlan.planName.length > 0 && treatmentPlan.planName.length < 3
						? 'El nombre del plan es muy corto'
						: ''
				}
			/>

			{/* Descripción */}
			<RM_Input
				value={treatmentPlan.description}
				onChange={(value) => handleChange('description', value)}
				label="Descripción"
				required
			/>

			{/* Fechas de Inicio y Fin */}
			<div className="flex flex-col md:flex-row gap-2 w-full">
				<RM_Input
					value={treatmentPlan.startDate}
					onChange={(value) => handleChange('startDate', value)}
					label="Fecha de Inicio"
					type="date"
					required
				/>
				<RM_Input
					value={treatmentPlan.endDate}
					onChange={(value) => handleChange('endDate', value)}
					label="Fecha de Fin"
					type="date"
				/>
			</div>

			{/* Responsable */}
			<RM_Select
				options={[
					{ value: 'John Doe', label: 'John Doe' },
					{ value: 'Jane Smith', label: 'Jane Smith' },
					// Agrega más opciones de responsable aquí
				]}
				value={treatmentPlan.responsible}
				label="Responsable"
				onChange={(value) => handleChange('responsible', value)}
				required
			/>

			{/* Botón de Enviar */}
			<RM_Button type="submit">Crear Plan</RM_Button>

			<Toaster />
		</form>
	);
};

export default TreatmentPlanCreate;
