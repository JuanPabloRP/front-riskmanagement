import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/routes';
import { UserProvider } from './context/userContext';
import { AuthProvider } from './context/authContext';

function App() {
	return (
		<AuthProvider>
			<UserProvider>
				<Router>
					<AppRoutes />
				</Router>
			</UserProvider>
		</AuthProvider>
	);
}

export default App;
