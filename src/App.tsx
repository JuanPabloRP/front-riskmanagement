import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/public/Index';
import SignIn from './pages/public/auth/SignIn';
import SignUp from './pages/public/auth/SignUp';
import PrivateLayout from './layouts/PrivateLayout';
import PublicLayout from './layouts/PublicLayout';
import Home from './pages/private/Home';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/risk-management" element={<PrivateLayout />}>
					{/* Rutas privadas de la aplicación, todas las que van despues de registrarse o iniciar sesión */}
					<Route path="" element={<Home />}/>
				</Route>
				<Route path="/auth">
					<Route path="signin" element={<SignIn />} />
					<Route path="signup" element={<SignUp />} />
				</Route>
				<Route path="/" element={<PublicLayout />}>
					<Route path='' element={<Index />} />
				</Route>
				<Route
					path="*"
					element={<h1 className="text-red-500">Error, no hay nada aquí</h1>}
				/>
			</Routes>
		</Router>
	);
}

export default App;
