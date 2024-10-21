import { Button, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { paths } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import { MouseEventHandler } from 'react';

const PublicNavbar = () => {
	const navigate = useNavigate();

	const handleNavigate = (e, path: string) => {
		console.log(typeof e);
		e.preventDefault();
		navigate(path);
	};

	return (
		<Navbar
			fluid
			rounded
			className="bg-bg m-2 w-3/4 mx-auto rounded-xl border border-border sticky top-2 z-50"
		>
			<Navbar.Brand
				onClick={(e) => handleNavigate(e, paths.publicHome)}
				className="flex gap-2 justify-center items-center hover:cursor-pointer"
			>
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
				<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
					Gestión de riesgos
				</span>
			</Navbar.Brand>
			<section className="flex md:order-2">
				<Button onClick={(e: any) => handleNavigate(e, paths.signinFullRoute)}>
					Iniciar sesión
				</Button>
				<Navbar.Toggle />
			</section>
			<Navbar.Collapse>
				<Navbar.Link
					onClick={(e) => handleNavigate(e, paths.publicHome)}
					active
					className="hover:cursor-pointer text-text-tertiary"
				>
					Inicio
				</Navbar.Link>
				<Navbar.Link
					onClick={(e) => handleNavigate(e, paths.aboutUs)}
					className="hover:cursor-pointer text-text-tertiary/50"
				>
					Sobre nosotros
				</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
};
export default PublicNavbar;
