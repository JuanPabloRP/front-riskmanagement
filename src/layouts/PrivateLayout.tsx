import { Outlet } from 'react-router-dom';
import PrivateNavbar from '../components/PrivateNavbar';

const PrivateLayout = () => {
	return (
		<>
			<PrivateNavbar />
			<Outlet />
		</>
	);
};

export default PrivateLayout;
