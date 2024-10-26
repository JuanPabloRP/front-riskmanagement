import { Button, Label, Select, TextInput } from 'flowbite-react';
import { ROLES } from '../../../../shared/constants/user-roles.constant';
import { useState } from 'react';
import { UserType } from '../../../../shared/interfaces/user.interface';
import { notifyError } from '../../../../utils/toast';
import { Toaster } from 'react-hot-toast';
import { paths } from '../../../../shared/constants/constants';
import BackButton from '../../../../shared/components/BackButton';

const SignUp = () => {
	const roles = ROLES;
	const [userInformation, setUserInformation] = useState({} as UserType);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(e.target);
		const [
			name,
			lastName,
			password,
			passwordConfirmation,
			birthDate,
			identification,
			rol,
		] = e.target as unknown as HTMLInputElement[];

		if (password.value !== passwordConfirmation.value) {
			notifyError('Las contraseñas no coinciden');
			return;
		}

		setUserInformation({
			firstName: name.value,
			lastName: lastName.value,
			password: password.value,
			identification: identification.value,
			birthDate: birthDate.value,
			role: rol.value,
		});

		console.log(userInformation);
	};

	return (
		<form
			className="flex justify-center items-center max-w-2xl flex-col gap-4 mx-auto min-h-screen"
			onSubmit={handleSubmit}
		>
			<BackButton path={paths.privateHome} />
			<h1 className="text-text-primary text-center text-3xl">
				Registrar usuario
			</h1>
			<div className="flex flex-col md:flex-row justify-center items-center gap-2 text-text-primary w-full">
				<div className="w-full">
					<div className="mb-2 block">
						<Label
							htmlFor="name"
							value="Nombres"
							className="text-text-primary"
						/>
					</div>
					<TextInput id="name" type="text" placeholder="Juan " required />
				</div>
				<div className="w-full">
					<div className="mb-2 block">
						<Label
							htmlFor="lastName"
							value="Apellidos"
							className="text-text-primary"
						/>
					</div>
					<TextInput id="lastName" type="text" placeholder="Perez" required />
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
					<TextInput id="password" type="password" required />
				</div>
				<div className=" w-full">
					<div className="mb-2 block">
						<Label
							htmlFor="passwordConfirmation"
							value="Repetir contraseña"
							className="text-text-primary"
						/>
					</div>
					<TextInput id="passwordConfirmation" type="password" required />
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
					<TextInput id="birthDate" type="date" required />
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
					<Select id="rol" required>
						{roles.map(({ value, label }) => (
							<option value={value}>{label}</option>
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
			<Toaster position="top-right" />
		</form>
	);
};

export default SignUp;
