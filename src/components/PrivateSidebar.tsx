import { Sidebar } from 'flowbite-react';
import {
	HiArrowSmRight,
	HiChartPie,
	HiInbox,
	HiShoppingBag,
	HiTable,
	HiUser,
} from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

export function PrivateSidebar() {
	const sidebarRoutes = [
		{
			name: 'Dashboard',
			icon: HiChartPie,
			path: '/dashboard',
		},
		{
			name: 'Inbox',
			icon: HiInbox,
			path: '/inbox',
		},
		{
			name: 'Users',
			icon: HiUser,
			path: '/users',
		},
	];

	return (
		<Sidebar className="w-fit bg-bg-surface-primary p-0">
			<Sidebar.Items className="min-h-screen w-fit bg-bg-surface-primary p-0">
				<Sidebar.ItemGroup className="w-fit bg-bg-surface-primary p-0">
					{/*<Sidebar.Item href="#" icon={HiChartPie}>
						<span className="hidden md:block">Dashboard</span>
					</Sidebar.Item>
					 	<Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
						<Sidebar.Item href="#">Products</Sidebar.Item>
						<Sidebar.Item href="#">Sales</Sidebar.Item>
						<Sidebar.Item href="#">Refunds</Sidebar.Item>
						<Sidebar.Item href="#">Shipping</Sidebar.Item>
					</Sidebar.Collapse> */}
					{sidebarRoutes.map(({ name, icon, path }) => (
						<NavLink key={path} to={path}>
							<span className="hidden md:block text-text-secondary">
								{name}
							</span>
						</NavLink>
					))}
				</Sidebar.ItemGroup>
			</Sidebar.Items>
		</Sidebar>
	);
}
