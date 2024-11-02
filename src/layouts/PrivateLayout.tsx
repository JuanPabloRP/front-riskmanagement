import { Outlet } from 'react-router-dom';
import PrivateNavbar from '../components/PrivateNavbar';
import PrivateSidebar from '../components/PrivateSidebar';

const PrivateLayout = () => {
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
