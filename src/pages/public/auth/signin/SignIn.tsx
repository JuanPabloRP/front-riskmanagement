import { useState } from 'react';
import RM_Link from '../../../../shared/components/RM_Link';
import { PATHS } from '../../../../shared/constants/routes.constant';
import { UserType } from '../../../../shared/interfaces/user.interface';
import RM_Input from '../../../../shared/components/RM_Input';
import RM_Button from '../../../../shared/components/RM_Button';
import { Link } from 'react-router-dom';
import BackButton from '../../../../shared/components/BackButton';

const SignIn = () => {
	const [userInfo, setUserInfo] = useState<UserType>({
		birthDate: '',
		identification: '',
		lastName: '',
		password: '',
		passwordConfirmation: '',
		role: '',
		firstName: '',
		email: '',
		id: undefined,
	});

	const handleChange = (field: keyof UserType, value: string) => {
		setUserInfo((prevUser) => ({
			...prevUser,
			[field]: value,
		}));
	};

	return (
		<>
			<form className="flex justify-center  items-center max-w-2xl flex-col gap-4 mx-auto min-h-full px-3 mt-10 border-5 border-yellow-500	">
				<BackButton path={PATHS.public.home} />

				<h1 className="text-text-primary text-center text-3xl">
					Inicio de sesión
				</h1>

				<RM_Input
					value={userInfo?.identification}
					onChange={(value) => handleChange('identification', value as string)}
					label="identificación"
					required
					placeholder="Ingrese su identificacion"
				/>

				<RM_Input
					value={userInfo?.password}
					onChange={(value) => handleChange('password', value as string)}
					label="Contraseña"
					type="password"
					required
					placeholder="Ingrese su contraseña"
				/>
				<RM_Button onClick={(e) => console.log(e)} type="submit">
					<span>Iniciar sesión</span>
				</RM_Button>
				<p>
					¿Aún no tienes cuenta?,{' '}
					<Link
						to={PATHS.public.auth.signup}
						className="underline text-text-tertiary"
					>
						Registrate
					</Link>
				</p>
			</form>
		</>
	);
};
export default SignIn;
