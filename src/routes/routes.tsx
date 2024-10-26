import { Routes, Route } from 'react-router-dom';

// Contants
import { paths } from '../shared/constants/constants';

// Components
import Index from '../pages/public/home/Index';
import SignIn from '../pages/public/auth/signin/SignIn';
import SignUp from '../pages/public/auth/signup/SignUp';
import PrivateLayout from '../layouts/PrivateLayout';
import PublicLayout from '../layouts/PublicLayout';
import Home from '../pages/private/home/Home';
import Playground from '../pages/playground/Playground';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path={paths.playground} element={<Playground />} />

			{/* Rutas privadas de la aplicación, todas las que van despues de registrarse o iniciar sesión */}
			<Route path={paths.privateHome} element={<PrivateLayout />}>
				<Route path="" element={<Home />} />
			</Route>

			{/* Rutas para registrarse o iniciar sesión */}
			<Route path={paths.auth}>
				<Route path={paths.signin} element={<SignIn />} />
				<Route path={paths.signup} element={<SignUp />} />
			</Route>

			{/* Ruta principal a la que se entra la primera vez que se entra a la página */}
			<Route path={paths.publicHome} element={<PublicLayout />}>
				<Route path="" element={<Index />} />
			</Route>

			{/* Ruta para mostrar un error cuando no se encuentra la página (TODO: crear página especifica para esto) */}
			<Route
				path={paths.notFound}
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
