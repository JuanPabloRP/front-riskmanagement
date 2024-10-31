// React
import { useState } from 'react';
import { UserType } from '../../../../shared/interfaces/user.interface';

// Constants
import { ROLES } from '../../../../shared/constants/user-roles.constant';
import { PATHS } from '../../../../shared/constants/routes.constant';

// Enums
import { MethodType, ResponseType } from '../../../../shared/enums/httpEnums';

// Utils
import { notifyError, notifySuccess } from '../../../../utils/toast';
import { fetchMethod } from '../../../../utils/fetchMethod';

// Components
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { UserRolesEnum } from '../../../../shared/enums/user-roles.enum';
import RM_Input from '../../../../shared/components/RM_Input';
import RM_Select from '../../../../shared/components/RM_Select';
import RM_Button from '../../../../shared/components/RM_Button';
import RM_Link from '../../../../shared/components/RM_Link';

const SignUp = () => {
	const [userInformation, setUserInformation] = useState<UserType>({
		birthDate: '',
		identification: '',
		lastName: '',
		password: '',
		passwordConfirmation: '',
		role: '',
		firstName: '',
		createdAt: undefined,
		updatedAt: undefined,
		email: '',
		id: undefined,
	});
	const API_URL = import.meta.env.VITE_API_URL;

	const roles = ROLES.filter((rol) => rol.value !== UserRolesEnum.SUPERADMIN);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (
			!userInformation?.firstName ||
			!userInformation?.lastName ||
			!userInformation?.password ||
			!userInformation?.passwordConfirmation ||
			!userInformation?.role ||
			!userInformation?.birthDate ||
			!userInformation?.identification
		) {
			notifyError('Por favor llena todos los campos');
			return;
		}

		if (userInformation?.password !== userInformation?.passwordConfirmation) {
			notifyError('Las contraseñas no coinciden');
			return;
		}

		if (userInformation?.role === '') {
			notifyError('Selecciona un rol');
			return;
		}

		fetchMethod(
			`${API_URL}/v1/user`,
			MethodType.POST,
			userInformation,
			ResponseType.JSON,
			undefined,
			true
		);
		notifySuccess('Usuario registrado correctamente');
	};

	const handleChange = (field: keyof UserType, value: string) => {
		setUserInformation((prevUser) => ({
			...prevUser,
			[field]: value,
		}));
	};

	const handleSelectOnChange = (value: string | number) => {
		setUserInformation((prevUser) => ({
			...prevUser,
			role: value.toString(),
		}));
	};

	return (
		<form
			className="flex justify-center items-center max-w-2xl flex-col gap-4 mx-auto min-h-full px-3 mt-10"
			onSubmit={handleSubmit}
		>
			<RM_Link
				to={PATHS.public.home}
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

			<h1 className="text-text-primary text-center text-3xl">Registro</h1>

			<div className="flex flex-col md:flex-row gap-2 w-full">
				<RM_Input
					value={userInformation?.firstName}
					onChange={(value) => handleChange('firstName', value as string)}
					label="Nombre"
					required
					error={
						userInformation.firstName.length > 0 &&
						userInformation.firstName.length < 3
							? 'El nombre es muy corto'
							: ''
					}
				/>
				<RM_Input
					value={userInformation?.lastName}
					onChange={(value) => handleChange('lastName', value as string)}
					error={
						userInformation.lastName.length > 0 &&
						userInformation.lastName.length < 3
							? 'El apellido es muy corto'
							: ''
					}
					type="text"
					label="Apellidos"
					required
				/>
			</div>
			<div className="flex flex-col md:flex-row gap-2 w-full">
				<RM_Input
					value={userInformation?.password}
					onChange={(value) => handleChange('password', value as string)}
					label="Contraseña"
					type="password"
					required
				/>
				<RM_Input
					value={userInformation?.passwordConfirmation}
					onChange={(value) =>
						handleChange('passwordConfirmation', value as string)
					}
					error={
						userInformation.password !== userInformation.passwordConfirmation &&
						userInformation.passwordConfirmation &&
						userInformation?.passwordConfirmation?.length > 0
							? 'Las contraseñas no coinciden'
							: ''
					}
					label="Repetir contraseña"
					type="password"
					required
				/>
			</div>
			<div className="flex flex-col md:flex-row gap-2 w-full">
				<RM_Input
					value={userInformation?.birthDate}
					onChange={(value) => handleChange('birthDate', value as string)}
					label="Fecha de nacimiento"
					type="date"
					required
				/>

				<RM_Input
					value={userInformation?.identification}
					onChange={(value) => handleChange('identification', value as string)}
					label="Cédula"
					type="number"
					placeholder="1007234567"
					min={1000000}
					max={9999999999}
					required
					error={
						(userInformation.identification.length > 0 &&
							userInformation.identification.length < 1000000) ||
						userInformation.identification.length > 9999999999
							? 'Cédula inválida'
							: ''
					}
				/>
			</div>

			<div className="flex flex-col md:flex-row gap-2 w-full">
				<RM_Select
					options={roles}
					value={userInformation?.role}
					label="Selecciona un rol"
					onChange={(value) => handleSelectOnChange(value)}
					defaultValue={''}
					name="rol"
					required
				/>
			</div>
			<RM_Button type="submit" onClick={(e) => handleSubmit(e)}>
				<span className="">Registrar</span>
			</RM_Button>

			<p>
				¿Ya tienes cuenta?,{' '}
				<Link
					to={PATHS.public.auth.signin}
					className="underline text-text-tertiary"
				>
					Inicia sesión
				</Link>
			</p>
			<Toaster />
		</form>
	);
};

export default SignUp;
