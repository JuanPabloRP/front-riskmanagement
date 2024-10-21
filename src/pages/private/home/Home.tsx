import { Link } from 'react-router-dom';
import { paths } from '../../../utils/constants';

const Home = () => {
	return (
		<>
			<div className="text-text-tertiary font-bold">Private Home</div>
			<section className="flex flex-col justify-center items-center">
				<h2 className="text-2xl text-text-tertiary">Ir a la sección:</h2>
				<section className="flex flex-col gap-1">
					<Link to={paths.playground} className="text-text-danger">
						Playground
					</Link>

					<Link to={paths.publicHome}>Home público</Link>
					<Link to={paths.aboutUs}>Sobre nosotros</Link>
					<Link to={paths.privateHome}>Home privado</Link>

					<Link to={paths.rolesFullRoute}>Roles</Link>
					<Link to={paths.usersFullRoute}>Usuarios</Link>
					<Link to={paths.threatsFullRoute}>Amenazas</Link>
					<Link to={paths.assetsFullRoute}>Activos</Link>
					<Link to={paths.vulnerabilitiesFullRoute}>Vulnerabilidades</Link>
					<Link to={paths.controlsFullRoute}>Controles</Link>
					<Link to={paths.treatmentPlanFullRoute}>Plan de tratamiento</Link>
					<Link to={paths.risksFullRoute}>Riesgos</Link>
				</section>
			</section>
		</>
	);
};

export default Home;
