import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { PATHS } from '../shared/constants/routes.constant';
import RM_Link from '../shared/components/RM_Link';

const PrivateNavbar = () => {
	return (
		<Navbar className="bg-bg m-2 w-3/4 mx-auto rounded-xl border border-border sticky top-2 z-50 ">
			<RM_Link
				to={PATHS.private.home}
				className="flex gap-2 justify-center items-center hover:cursor-pointer text-white no-underline"
				icon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="icon icon-tabler icons-tabler-outline icon-tabler-augmented-reality"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
						<path d="M4 16v2a2 2 0 0 0 2 2h2" />
						<path d="M16 4h2a2 2 0 0 1 2 2v2" />
						<path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
						<path d="M12 12.5l4 -2.5" />
						<path d="M8 10l4 2.5v4.5l4 -2.5v-4.5l-4 -2.5z" />
						<path d="M8 10v4.5l4 2.5" />
					</svg>
				}
			>
				<span className="self-center whitespace-nowrap text-xl font-semibold  ">
					Gestión de riesgos
				</span>
			</RM_Link>
			<div className="flex md:order-2 ">
				<Dropdown
					arrowIcon={false}
					inline
					label={
						<Avatar
							alt="User settings"
							img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
							rounded
						/>
					}
					className="bg-bg border-border-secondary text-text-primary"
				>
					<Dropdown.Header className="border-border-secondary text-text-primary">
						<span className="block text-sm">Bonnie Green</span>
						<span className="block truncate text-sm font-medium">
							name@flowbite.com
						</span>
					</Dropdown.Header>
					<Dropdown.Item className="text-text-primary hover:bg-bg-fill-hover active:bg-bg-fill-active focus:bg-bg-fill-active">
						Perfil
					</Dropdown.Item>
					<Dropdown.Item className="text-text-primary hover:bg-bg-fill-hover active:bg-bg-fill-active focus:bg-bg-fill-active">
						Configuración
					</Dropdown.Item>
					<Dropdown.Divider className="bg-bg-surface-primary" />
					<Dropdown.Item className="text-text-danger hover:bg-bg-fill-hover/50 active:bg-bg-fill-active/50 focus:bg-bg-fill-active/50">
						Cerrar sesión
					</Dropdown.Item>
				</Dropdown>
				<Navbar.Toggle />
			</div>
			<Navbar.Collapse className="font-bold">
				{/* {navbarRoutes.map(({ name, path }) => (
					<NavLink
						key={path}
						to={path}
						className={({ isActive }) =>
							isActive ? 'text-text-secondary' : 'text-text-tertiary'
						}
					>
						{name}
					</NavLink>
				))} */}
			</Navbar.Collapse>
		</Navbar>
	);
};

export default PrivateNavbar;
