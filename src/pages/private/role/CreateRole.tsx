import React, { useState } from 'react';
import RM_Input from '../../../shared/components/RM_Input';
import RM_Button from '../../../shared/components/RM_Button';
import { RoleType } from '../../../shared/interfaces/user-roles.type';
import { fetchMethod } from '../../../utils/fetchMethod';
import { MethodType } from '../../../shared/enums/httpEnums';
import { Toaster } from 'react-hot-toast';
import {
	notifyError,
	notifySuccess,
} from '../../../shared/components/RM_Toast';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../shared/constants/routes.constant';

const CreateRole = () => {
	const [role, setRole] = useState<RoleType>({
		name: '',
	});

	const navigate = useNavigate();

	const handleChange = (field: keyof RoleType, value: string) => {
		setRole((prevUser) => ({
			...prevUser,
			[field]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!role.name) {
			notifyError('Por favor llena todos los campos obligatorios');
			return;
		}

		fetchMethod<RoleType[]>(
			'http://localhost:8080/api/v1/role',
			MethodType.POST,
			role,
			undefined,
			undefined,
			true
		)
			.then((data) => {
				console.log(data);
				notifySuccess('Rol creado correctamente');

				setTimeout(() => {
					navigate(PATHS.private.roles.base);
				}, 500);
			})
			.catch((error) => {
				console.log(error);
				notifyError('Hubo un error al crear el rol');
			});
	};

	return (
		<form action="" className="max-w-3xl mx-auto">
			<h1 className="text-center text-3xl mb-5 font-semibold">Creación rol</h1>
			<section>
				<RM_Input
					required
					label="Nombre del rol"
					value={role.name}
					onChange={(value) => handleChange('name', value as string)}
				/>
				<RM_Button onClick={(e) => handleSubmit(e)}>
					<span>Crear rol</span>
				</RM_Button>
			</section>
			<Toaster />
		</form>
	);
};

export default CreateRole;
