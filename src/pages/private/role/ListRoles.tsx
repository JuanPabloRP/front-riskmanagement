import React from 'react';
import { RoleType } from '../../../shared/interfaces/user-roles.type';
import { UserRolesEnum } from '../../../shared/enums/user-roles.enum';
import RM_Button from '../../../shared/components/RM_Button';

const ListRoles = () => {
	const roles: RoleType[] = [
		{
			id: 1,
			name: UserRolesEnum.SUPERADMIN,
			description: 'Rol con todos los permisos',
		},
		{
			id: 2,
			name: UserRolesEnum.ADMIN,
			description: 'Rol con permisos de administrador',
		},
		{
			id: 3,
			name: UserRolesEnum.RISK_MANAGER,
			description: 'Rol con permisos de gestor de riesgo',
		},
		{
			id: 4,
			name: UserRolesEnum.RISK_OWNER,
			description: 'Rol con permisos de propietario del riesgo',
		},
		{
			id: 5,
			name: UserRolesEnum.ASSET_MANAGER,
			description: 'Rol con permisos de gestor de activos',
		},
		{
			id: 6,
			name: UserRolesEnum.SECURITY_ANALYST,
			description: 'Rol con permisos de analista de seguridad',
		},
		{
			id: 7,
			name: UserRolesEnum.AUDITOR,
			description: 'Rol con permisos de auditor',
		},
	];
	return (
		<section>
			<h1 className="text-center text-3xl font-semibold mb-5">
				Lista de roles
			</h1>
			<section className="mx-auto flex flex-col justify-center items-center max-w-5xl">
				<ul className="flex flex-col justify-center items-center gap-2">
					{roles.map((role) => (
						<li
							key={role.id}
							className="p-2 bg-bg-surface-primary/30 min-w-full rounded-lg hover:bg-bg-surface-primary/70 transition-all flex justify-between items-center gap-5"
						>
							<div>
								<h2 className="text-text-primary text-lg font-semibold">
									{role.name}
								</h2>
								<p className="text-text-primary/80">{role.description}</p>
							</div>
							<div className="flex gap-1">
								<RM_Button
									variant="neutral"
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
											className="icon icon-tabler icons-tabler-outline icon-tabler-edit"
										>
											<path stroke="none" d="M0 0h24v24H0z" fill="none" />
											<path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
											<path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
											<path d="M16 5l3 3" />
										</svg>
									}
								></RM_Button>
								<RM_Button
									variant="danger"
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
											className="icon icon-tabler icons-tabler-outline icon-tabler-circle-minus"
										>
											<path stroke="none" d="M0 0h24v24H0z" fill="none" />
											<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
											<path d="M9 12l6 0" />
										</svg>
									}
								></RM_Button>
							</div>
						</li>
					))}
				</ul>
			</section>
		</section>
	);
};

export default ListRoles;
