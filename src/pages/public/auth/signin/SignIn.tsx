import { useState } from 'react';
import RM_Link from '../../../../shared/components/RM_Link';
import { PATHS } from '../../../../shared/constants/routes.constant';
import { UserType } from '../../../../shared/interfaces/user.interface';
import RM_Input from '../../../../shared/components/RM_Input';

const SignIn = () => {
   const [userInfo, setUserInfo]= useState<UserType>({
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

   const handleChange = (field: keyof UserType, value: string) => {
	setUserInfo((prevUser) => ({
		...prevUser,
		[field]: value,
	}));
   };
   const contarDigitos = (value: string | number) => {
	const val = value.toString();
	return val.length;
    }

	return (
		<form
		className='flex justify-center  items-center max-w-2xl flex-col gap-4 mx-auto min-h-full px-3 mt-10'
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

			<h1 className="text-text-primary text-center text-3xl">Inicio Sesion</h1>

			<RM_Input
			 value={userInfo?.id}
			 onChange={(value) => handleChange('id', value as string)}
			 label="ID"
			 required
			 error={
				userInfo.id == 0 || (contarDigitos(userInfo.password) < 4)? 'El id no contiene el tamaño requerido': ''
			  }
			/>
			<RM_Input
			 value={userInfo?.password}
			 onChange={(value) => handleChange('password', value as string)}
			 label="Contraseña"
			 required
			 error={
				userInfo.password == '0' || (contarDigitos(userInfo.password) < 4)? 'la contraseña es demaciado corta ': ''
			  }
			/>
			
		</form>	
	); 
}
export default SignIn;
