const BASE_URL = '/risk-management';

export const PATHS = {
	base: BASE_URL,

	public: {
		home: '/',
		aboutUs: '/about-us',
		playground: '/playground',
		auth: {
			base: '/auth',
			signin: '/auth/signin',
			signup: '/auth/signup',
		},
	},

	private: {
		home: BASE_URL,
		users: {
			base: `${BASE_URL}/users`,
			create: `${BASE_URL}/users/create`,
			edit: `${BASE_URL}/users/edit`,
		},
		roles: {
			base: `${BASE_URL}/roles`,
			create: `${BASE_URL}/roles/create`,
			edit: `${BASE_URL}/roles/edit`,
		},
		threats: {
			base: `${BASE_URL}/threats`,
			create: `${BASE_URL}/threats/create`,
			edit: `${BASE_URL}/threats/edit`,
		},
		assets: {
			base: `${BASE_URL}/assets`,
			create: `${BASE_URL}/assets/create`,
			edit: `${BASE_URL}/assets/edit`,
		},
		vulnerabilities: {
			base: `${BASE_URL}/vulnerabilities`,
			create: `${BASE_URL}/vulnerabilities/create`,
			edit: `${BASE_URL}/vulnerabilities/edit`,
		},
		controls: {
			base: `${BASE_URL}/controls`,
			create: `${BASE_URL}/controls/create`,
			edit: `${BASE_URL}/controls/edit`,
		},
		treatmentPlan: {
			base: `${BASE_URL}/treatment-plan`,
			create: `${BASE_URL}/treatment-plan/create`,
			edit: `${BASE_URL}/treatment-plan/edit`,
		},
		risks: {
			base: `${BASE_URL}/risks`,
			create: `${BASE_URL}/risks/create`,
			edit: `${BASE_URL}/risks/edit`,
		},
	},

	notFound: '*',
};


export const LINKS = [
	{ title: 'Home público', path: PATHS.public.home },
	{ title: 'Home privado', path: PATHS.private.home },
	{ title: 'Playground', path: PATHS.public.playground },
	{ title: 'Sobre nosotros', path: PATHS.public.aboutUs },
	{ title: 'Roles', path: PATHS.private.roles.base },
	{ title: 'Usuarios', path: PATHS.private.users.base },
	{ title: 'Amenazas', path: PATHS.private.threats.base },
	{ title: 'Activos', path: PATHS.private.assets.base },
	{ title: 'Vulnerabilidades', path: PATHS.private.vulnerabilities.base },
	{ title: 'Controles', path: PATHS.private.controls.base },
	{ title: 'Plan de tratamiento', path: PATHS.private.treatmentPlan.base },
	{ title: 'Riesgos', path: PATHS.private.risks.base },
	
]