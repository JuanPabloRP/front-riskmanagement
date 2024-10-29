// React
import { useState } from 'react';
import { UserType } from '../../../../shared/interfaces/user.interface';

// Flowbite
import { Button, Label, Select, TextInput } from 'flowbite-react';

// Constants
import { ROLES } from '../../../../shared/constants/user-roles.constant';
import { PATHS } from '../../../../shared/constants/routes.constant';

// Enums
import { MethodType, ResponseType } from '../../../../shared/enums/httpEnums';

// Utils
import { notifyError, notifySuccess } from '../../../../utils/toast';
import { fetchMethod } from '../../../../utils/fetchMethod';

// Components
import BackButton from '../../../../shared/components/BackButton';
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { UserRolesEnum } from '../../../../shared/enums/user-roles.enum';
import RM_Input from '../../../../shared/components/RM_Input';

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

		if (userInformation?.password !== userInformation?.passwordConfirmation) {
			notifyError('Las contraseñas no coinciden');
			return;
		}

		if (userInformation?.role === '') {
			notifyError('Selecciona un rol');
			return;
		}

		console.log(userInformation);
		notifySuccess('Usuario registrado correctamente');
		fetchMethod(
			`${API_URL}/v1/user`,
			MethodType.POST,
			userInformation,
			ResponseType.JSON,
			undefined,
			true
		);
	};

	const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
		const target = e.target as HTMLInputElement;
		const [name, value] = [target?.name, target?.value];

		setUserInformation({
			...userInformation,
			[name]: value,
		} as UserType);
	};

	const handleChange2 = (field: keyof UserType, value: string) => {
		setUserInformation((prevUser) => ({
			...prevUser,
			[field]: value,
		}));
	};

	return (
		<form
			className="flex justify-center items-center max-w-2xl flex-col gap-4 mx-auto min-h-full px-3 mt-10"
			onSubmit={handleSubmit}
			//onChange={handleChange}
		>
			<BackButton path={PATHS.publicHome} />
			<h1 className="text-text-primary text-center text-3xl">Registro</h1>
			<div className="flex flex-col md:flex-row justify-center items-center gap-2 text-text-primary w-full">
				<div className="w-full">
					<div className="mb-2 block">
						<Label
							htmlFor="name"
							value="Nombres"
							className="text-text-primary"
						/>
					</div>
					<TextInput
						id="name"
						name="name"
						type="text"
						placeholder="Juan "
						required
					/>
				</div>
				<div className="w-full">
					<div className="mb-2 block">
						<Label
							htmlFor="lastName"
							value="Apellidos"
							className="text-text-primary"
						/>
					</div>
					<TextInput
						id="lastName"
						name="lastName"
						type="text"
						placeholder="Perez"
						required
					/>
				</div>
			</div>

			<div className="flex flex-col md:flex-row  justify-center items-center gap-2  text-text-primary  w-full">
				<div className=" w-full">
					<div className="mb-2 block">
						<Label
							htmlFor="password"
							value="Contraseña"
							className="text-text-primary"
						/>
					</div>
					<TextInput id="password" name="password" type="password" required />
				</div>
				<div className=" w-full">
					<div className="mb-2 block">
						<Label
							htmlFor="passwordConfirmation"
							value="Repetir contraseña"
							className="text-text-primary"
						/>
					</div>
					<TextInput
						id="passwordConfirmation"
						name="passwordConfirmation"
						type="password"
						required
					/>
				</div>
			</div>

			<div className="flex flex-col md:flex-row  justify-center items-center gap-2  text-text-primary  w-full">
				<div className=" w-full">
					<div className="mb-2 block">
						<Label
							htmlFor="birthDate"
							value="Fecha de nacimiento"
							className="text-text-primary"
						/>
					</div>
					<TextInput id="birthDate" name="birthDate" type="date" required />
				</div>
				<div className=" w-full">
					<div className="mb-2 block">
						<Label
							htmlFor="identification"
							value="Cédula"
							className="text-text-primary"
						/>
					</div>
					<TextInput
						id="identification"
						name="identification"
						type="number"
						placeholder="1007234567"
						min={1000000}
						max={9999999999}
						required
					/>
				</div>
			</div>

			<div className="flex flex-col md:flex-row  justify-center items-center gap-2  text-text-primary  w-full">
				<div className=" w-full">
					<div className="mb-2 block">
						<Label
							htmlFor="rol"
							value="Selecciona un rol"
							className="text-text-primary"
						/>
					</div>
					<Select id="rol" name="rol" required defaultValue="">
						<option key={-1} value="" disabled hidden>
							Selecciona un rol
						</option>
						{roles.map(({ value, label }) => (
							<option key={value} value={value}>
								{label}
							</option>
						))}
					</Select>
				</div>
			</div>

			<Button
				type="submit"
				className="bg-btn-primary hover:bg-btn-primary-hover focus:bg-btn-primary-hover active:bg-btn-primary-active"
			>
				Registrar
			</Button>

			<p>
				¿Ya tienes cuenta?,{' '}
				<Link
					to={PATHS.signinFullRoute}
					className="underline text-text-tertiary"
				>
					Inicia sesión
				</Link>
			</p>

			<div className="flex flex-col md:flex-row gap-2 w-full">
				<RM_Input
					value={userInformation?.firstName}
					onChange={(value) => handleChange2('firstName', value as string)}
					label="Nombre"
				/>
				<RM_Input
					value={userInformation?.lastName}
					onChange={(value) => handleChange2('lastName', value as string)}
					error={userInformation.lastName.length < 3 ? 'corto' : ''}
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
					value={userInformation?.password}
					onChange={(value) => handleChange2('password', value as string)}
					label="Contraseña"
					type="password"
				/>
				<RM_Input
					value={userInformation?.passwordConfirmation}
					onChange={(value) =>
						handleChange2('passwordConfirmation', value as string)
					}
					error={
						userInformation.password !== userInformation.passwordConfirmation
							? 'La contraseña no coincide'
							: ''
					}
					label="Repetir contraseña"
					type="password"
				/>
			</div>
			<div className="flex flex-col md:flex-row gap-2 w-full">
				<RM_Input
					value={userInformation?.birthDate}
					onChange={(value) => handleChange2('birthDate', value as string)}
					label="Fecha de nacimiento"
					type="date"
				/>

				<RM_Input
					value={userInformation?.identification}
					onChange={(value) => handleChange2('identification', value as string)}
					label="Cédula"
					type="number"
					placeholder="1007234567"
					min={1000000}
					max={9999999999}
				/>
			</div>
			<div className="flex flex-col md:flex-row gap-2 w-full"></div>

			<Toaster position="top-right" />
		</form>
	);
};

export default SignUp;
