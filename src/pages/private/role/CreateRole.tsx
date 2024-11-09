import React, { useState } from 'react';
import RM_Link from '../../../shared/components/RM_Link';
import RM_Input from '../../../shared/components/RM_Input';
import RM_Button from '../../../shared/components/RM_Button';
import { RoleType } from '../../../shared/interfaces/user-roles.type';

const CreateRole = () => {
	const [role, setRole] = useState<RoleType>({
		name: '',
		description: '',
	});

	const handleChange = (field: keyof RoleType, value: string) => {
		setRole((prevUser) => ({
			...prevUser,
			[field]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
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
		</form>
	);
};

export default CreateRole;
