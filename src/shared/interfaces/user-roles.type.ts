export interface RolesType {
	roles: RoleType[];
}

export interface RoleType {
	id: number;
	name: string;
	description: string;
	createdAt: Date;
	updatedAt: Date;
	deletedAt: Date;
}
