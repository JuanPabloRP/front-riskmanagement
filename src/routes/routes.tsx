import { Routes, Route } from 'react-router-dom';

// Contants
import { PATHS } from '../shared/constants/routes.constant';

// Components
import Index from '../pages/public/home/Index';
import SignIn from '../pages/public/auth/signin/SignIn';
import SignUp from '../pages/public/auth/signup/SignUp';
import NewControl from '../pages/private/Controles/NewControl';
import PrivateLayout from '../layouts/PrivateLayout';
import PublicLayout from '../layouts/PublicLayout';
import Home from '../pages/private/home/Home';
import Playground from '../pages/playground/Playground';
import ListaControles from '../pages/private/Controles/GestionControls';
import EditControl from '../pages/private/Controles/EditionControl';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path={PATHS.public.playground} element={<Playground />} />

			{/* Rutas privadas de la aplicación, todas las que van despues de registrarse o iniciar sesión */}
			<Route path={PATHS.private.home} element={<PrivateLayout />}>
				<Route path="" element={<Home />} />
				<Route path={PATHS.private.controls.create} element={<NewControl />} />
				<Route path={PATHS.private.controls.base} element={<ListaControles />} />
				<Route path={PATHS.private.controls.edit} element={<EditControl />} />
			</Route>

			{/* Rutas para registrarse o iniciar sesión */}
			<Route path={PATHS.public.auth.base}>
				<Route path={PATHS.public.auth.signin} element={<SignIn />} />
				<Route path={PATHS.public.auth.signup} element={<SignUp />} />
			</Route>

			{/* Ruta principal a la que se entra la primera vez que se entra a la página */}
			<Route path={PATHS.public.home} element={<PublicLayout />}>
				<Route path="" element={<Index />} />
				<Route path={PATHS.public.auth.base}>
					<Route path={PATHS.public.auth.signup} element={<SignUp />} />
					<Route path={PATHS.public.auth.signin} element={<SignIn />} />
				</Route>
			</Route>

			{/* Ruta para mostrar un error cuando no se encuentra la página (TODO: crear página especifica para esto) */}
			<Route
				path={PATHS.notFound}
				element={
					<h1 className="text-red-500 font-bold text-3xl">
						Error, no hay nada aquí
					</h1>
				}
			/>
		</Routes>
	);
};

export default AppRoutes;
