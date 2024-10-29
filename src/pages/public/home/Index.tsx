import { Link } from 'react-router-dom';
import { PATHS } from '../../../shared/constants/routes.constant';

const Index = () => {
	const links = [
		{ title: 'Playground', path: PATHS.playground },
		{ title: 'Home público', path: PATHS.publicHome },
		{ title: 'Sobre nosotros', path: PATHS.aboutUs },
		{ title: 'Home privado', path: PATHS.privateHome },
		{ title: 'Roles', path: PATHS.rolesFullRoute },
		{ title: 'Usuarios', path: PATHS.usersFullRoute },
		{ title: 'Amenazas', path: PATHS.threatsFullRoute },
		{ title: 'Activos', path: PATHS.assetsFullRoute },
		{ title: 'Vulnerabilidades', path: PATHS.vulnerabilitiesFullRoute },
		{ title: 'Controles', path: PATHS.controlsFullRoute },
		{ title: 'Plan de tratamiento', path: PATHS.treatmentPlanFullRoute },
		{ title: 'Riesgos', path: PATHS.risksFullRoute },
	];

	return (
		<div>
			<h1>Página inicial</h1>
			<section className="flex flex-col justify-center items-center">
				<h2 className="text-2xl text-text-tertiary ">Ir a la sección:</h2>
				<section className="flex flex-col gap-1">
					{links.map((link, index) => (
						<Link key={index} to={link.path}>
							{link.title}
						</Link>
					))}
				</section>
			</section>
		</div>
	);
};

export default Index;
