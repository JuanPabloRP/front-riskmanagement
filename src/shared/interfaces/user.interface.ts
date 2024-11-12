export interface UserType {
	id?: number | undefined;
	firstName: string;
	lastName: string;
	email?: string;
	password: string;
	passwordConfirmation?: string;
	identification: string;
	birthDate: Date | string;
	role: string;
}
