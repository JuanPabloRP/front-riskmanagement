import { UserRolesEnum } from '../enums/user-roles.enum';

export const ROLES = [
	{ value: UserRolesEnum.ADMIN, label: 'Administrador' },
	{ value: UserRolesEnum.ASSET_MANAGER, label: 'Gestor de activos' },
	{ value: UserRolesEnum.RISK_MANAGER, label: 'Gestor de riesgo' },
	{ value: UserRolesEnum.RISK_OWNER, label: 'Propietario del riesgo' },
	{ value: UserRolesEnum.SECURITY_ANALYST, label: 'Analista de seguridad' },
	{ value: UserRolesEnum.SUPERADMIN, label: 'Super Administrador' },
];
