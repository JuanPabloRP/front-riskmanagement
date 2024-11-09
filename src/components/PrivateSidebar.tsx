import React, { useState } from 'react';
import { PATHS } from '../shared/constants/routes.constant';
import RM_Link from '../shared/components/RM_Link';
import RM_Dropdown from '../shared/components/RM_Dropdown';

interface SidebarProps {
	children: React.ReactNode;
}

export default function PrivateSidebar({ children }: SidebarProps) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

	return (
		<div className="flex h-screen overflow-hidden">
			{/* Botón para abrir/cerrar el sidebar en dispositivos móviles */}
			<button
				className="fixed top-4 left-4 z-50 p-2 bg-primary text-primary-foreground rounded-md"
				onClick={toggleSidebar}
				aria-label={isSidebarOpen ? 'Cerrar menú' : 'Abrir menú'}
			>
				{isSidebarOpen ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						className="icon icon-tabler icons-tabler-outline icon-tabler-x"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M18 6l-12 12" />
						<path d="M6 6l12 12" />
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M4 6l16 0" />
						<path d="M4 12l16 0" />
						<path d="M4 18l16 0" />
					</svg>
				)}
			</button>

			{/* Overlay para cerrar el sidebar al hacer clic fuera en dispositivos móviles */}
			{isSidebarOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-40"
					onClick={toggleSidebar}
				></div>
			)}

			{/* Sidebar */}
			<aside
				className={`bg-bg border-r border-border-secondary fixed inset-y-0 left-0 z-50 w-64shadow-lg transform transition-all duration-300 ease-in-out 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
			>
				<nav className="h-full overflow-y-auto p-4">
					<div className="flex justify-between items-center mb-4">
						<img src="../../../src/assets/img/profile.png" alt="" className='h-20 w-20'/>
						<h2
							className={`text-xl font-bold ${
								isSidebarOpen ? '' : 'lg:hidden'
							}`}
						>
							Menú
						</h2>
						{/* Botón para cerrar el sidebar en desktop */}
						<button
							className="block p-2 hover:bg-accent rounded-md"
							onClick={toggleSidebar}
							aria-label={isSidebarOpen ? 'Cerrar menú' : 'Abrir menú'}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								className={` icon icon-tabler icons-tabler-outline icon-tabler-chevron-lefttransform transition-transform ${
									isSidebarOpen ? '' : 'rotate-180'
								}`}
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M15 6l-6 6l6 6" />
							</svg>
						</button>
					</div>
					<ul className="space-y-2">
						{/* Homes */}
						<RM_Dropdown
							title="Módulo homes"
							icon={
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									className="mr-2 icon icon-tabler icons-tabler-outline icon-tabler-shield-chevron"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
									<path d="M4 14l8 -3l8 3" />
								</svg>
							}
							isOpen={isSidebarOpen}
						>
							<RM_Link to={PATHS.public.home}>
								{' '}
								<span>Landing</span>{' '}
							</RM_Link>
							<RM_Link to={PATHS.private.home}>
								{' '}
								<span>home</span>{' '}
							</RM_Link>
						</RM_Dropdown>

						{/* Usuarios */}
						<RM_Dropdown
							title="Modulo usuarios"
							icon={
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									className="mr-2 icon icon-tabler icons-tabler-outline icon-tabler-shield-chevron"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
									<path d="M4 14l8 -3l8 3" />
								</svg>
							}
							isOpen={isSidebarOpen}
						>
							<RM_Link to={PATHS.private.users.base}>
								{' '}
								<span>usuarios</span>{' '}
							</RM_Link>
							<RM_Link to={PATHS.private.roles.base}>
								{' '}
								<span>Listar roles</span>{' '}
							</RM_Link>
							<RM_Link to={PATHS.private.roles.create}>
								{' '}
								<span>Crear rol</span>{' '}
							</RM_Link>
							<RM_Link to={PATHS.private.users.profile}>
								{' '}
								<span>ver perfil</span>{' '}
							</RM_Link>
						</RM_Dropdown>

						{/* Activos */}
						<RM_Dropdown
							title="Activos"
							icon={
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									className="mr-2 icon icon-tabler icons-tabler-outline icon-tabler-shield-chevron"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
									<path d="M4 14l8 -3l8 3" />
								</svg>
							}
							isOpen={isSidebarOpen}
						>
							<RM_Link to={PATHS.private.assets.base}>
								{' '}
								<span>Ver activos</span>{' '}
							</RM_Link>
							<RM_Link to={PATHS.private.assets.create}>
								{' '}
								<span>Crear activo</span>{' '}
							</RM_Link>
						</RM_Dropdown>

						{/* Controles */}
						<RM_Dropdown
							title="Contoles"
							icon={
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									className="mr-2 icon icon-tabler icons-tabler-outline icon-tabler-shield-chevron"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
									<path d="M4 14l8 -3l8 3" />
								</svg>
							}
							isOpen={isSidebarOpen}
						>
							<RM_Link to={PATHS.private.controls.base}>
								{' '}
								<span>Ver controles</span>{' '}
							</RM_Link>
							<RM_Link to={PATHS.private.controls.create}>
								{' '}
								<span>Crear control</span>{' '}
							</RM_Link>
						</RM_Dropdown>

						{/* Vulnerabilidades */}
						<RM_Dropdown
							title="Vulnerabilidades"
							icon={
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									className="mr-2 icon icon-tabler icons-tabler-outline icon-tabler-shield-chevron"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
									<path d="M4 14l8 -3l8 3" />
								</svg>
							}
							isOpen={isSidebarOpen}
						>
							<RM_Link to={PATHS.private.vulnerabilities.base}>
								{' '}
								<span>Ver vulnerabilidades</span>{' '}
							</RM_Link>
							<RM_Link to={PATHS.private.vulnerabilities.create}>
								{' '}
								<span>Crear vulnerabilidad</span>{' '}
							</RM_Link>
						</RM_Dropdown>

						{/* Plan de tratamiento */}
						<RM_Dropdown
							title="Plan de tratamiento"
							icon={
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									className="mr-2 icon icon-tabler icons-tabler-outline icon-tabler-shield-chevron"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
									<path d="M4 14l8 -3l8 3" />
								</svg>
							}
							isOpen={isSidebarOpen}
						>
							<RM_Link to={PATHS.private.treatmentPlan.base}>
								{' '}
								<span>Ver planes de tratamiento</span>{' '}
							</RM_Link>
							<RM_Link to={PATHS.private.treatmentPlan.create}>
								{' '}
								<span>Crear plan de tratamiento</span>{' '}
							</RM_Link>
						</RM_Dropdown>

						{/* Amenazas */}
						<RM_Dropdown
							title="Amenazas"
							icon={
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									className="mr-2 icon icon-tabler icons-tabler-outline icon-tabler-shield-chevron"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
									<path d="M4 14l8 -3l8 3" />
								</svg>
							}
							isOpen={isSidebarOpen}
						>
							<RM_Link to={PATHS.private.threats.base}>
								{' '}
								<span>Ver amenazas</span>{' '}
							</RM_Link>
							<RM_Link to={PATHS.private.threats.create}>
								{' '}
								<span>Crear amenaza</span>{' '}
							</RM_Link>
						</RM_Dropdown>
					</ul>
				</nav>
			</aside>

			{/* Contenido principal */}
			<main
				className={`flex-1  p-4 transition-all duration-300 ease-in-out ${
					isSidebarOpen ? 'lg:ml-64' : 'lg:ml-16'
				}`}
			>
				{children}
			</main>
		</div>
	);
}
