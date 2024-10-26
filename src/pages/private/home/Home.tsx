import { Link } from 'react-router-dom';
import { paths } from '../../../shared/constants/constants';

const Home = () => {
	const links = [
		{ title: 'Playground', path: paths.playground },
		{ title: 'Home público', path: paths.publicHome },
		{ title: 'Sobre nosotros', path: paths.aboutUs },
		{ title: 'Home privado', path: paths.privateHome },
		{ title: 'Roles', path: paths.rolesFullRoute },
		{ title: 'Usuarios', path: paths.usersFullRoute },
		{ title: 'Amenazas', path: paths.threatsFullRoute },
		{ title: 'Activos', path: paths.assetsFullRoute },
		{ title: 'Vulnerabilidades', path: paths.vulnerabilitiesFullRoute },
		{ title: 'Controles', path: paths.controlsFullRoute },
		{ title: 'Plan de tratamiento', path: paths.treatmentPlanFullRoute },
		{ title: 'Riesgos', path: paths.risksFullRoute },
	];

	return (
		<>
			<div className="text-text-tertiary font-bold">Private Home</div>
			<section className="flex flex-col justify-center items-center">
				<h2 className="text-2xl text-text-tertiary">Ir a la sección:</h2>
				<section className="flex flex-col gap-1">
					{links.map((link, index) => (
						<Link key={index} to={link.path}>
							{link.title}
						</Link>
					))}
				</section>
			</section>
		</>
	);
};

export default Home;
