import { Outlet } from 'react-router-dom';
import PrivateNavbar from '../components/PrivateNavbar';
import PrivateSidebar from '../components/PrivateSidebar';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../shared/constants/routes.constant';
import { useEffect } from 'react';

const PrivateLayout = () => {
	const { isAuthenticated,  } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuthenticated) {
			console.log('No está autenticado');
			navigate(PATHS.public.auth.signin);
		}
	}, [isAuthenticated]);

	return (
		<>
			<PrivateNavbar />
			<PrivateSidebar>
				<Outlet />
			</PrivateSidebar>
		</>
	);
};

export default PrivateLayout;
