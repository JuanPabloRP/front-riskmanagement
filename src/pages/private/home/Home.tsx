import { Link } from 'react-router-dom';
import { LINKS, PATHS } from '../../../shared/constants/routes.constant';
import { Button } from 'flowbite-react';
import managementSvg from '../../../assets/svg/management_svg.svg';

const Home = () => {
	const links = LINKS;

	return (
		<>
			{/* <section className="flex flex-col justify-center items-center">
				<h2>Secciones (ESTO SOLO ESTARÁ EN EL DESARROLLO) </h2>
				<section className="flex flex-wrap justify-center items-center gap-3 my-5">
					{links.map((link, index) => (
						<>
							<Link
								key={index}
								to={link.path}
								className="min-w-36 max-w-sm bg-bg-surface-primary hover:bg-bg-fill-hover focus:bg-bg-fill-hover text-text-primary border border-border-secondary rounded-md p-3 flex justify-center items-center gap-2"
							>
								<span>{link.title}</span>
								<svg
									className="-mr-1 ml-2 h-4 w-4"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							</Link>
						</>
					))}
				</section>
			</section> */}
			{/* 
				NO TOCAR EL CÓDIGO QUE HAY DE AQUI HACÍA ABAJO
			*/}
			<section className="flex flex-col justify-center items-center p-2 ">
				<div className="min-h-full">
					<h1 className="text-4xl font-bold text-text-primary mt-5">
						Panel de Control de Gestión de Riesgos
					</h1>
					<div className="flex flex-wrap justify-center items-center gap-5 my-12">
						<section className="border border-border hover:bg-white/10 hover:border-white rounded-md p-10 md:min-w-96 flex flex-col justify-between self-start">
							<p className="text-4xl font-bold">Acciones rápidas</p>
							<span className="text-text-primary/70">
								Accede a las funciones más utilizadas
							</span>

							<main className="flex flex-col justify-start items-start gap-2 py-2">
								<div className="flex gap-3">
									<Button /* className="bg-btn-primary hover:bg-btn-primary-hover focus:bg-btn-primary-hover active:bg-btn-primary-active  active: min-w-3 rounded-md flex justify-center items-center p-2" */
									>
										Crear riesgo
									</Button>
									<Button className="bg-btn-neutral min-w-36">
										Ver controles
									</Button>
								</div>
								<div className="flex gap-3">
									<Button className="bg-btn-neutral min-w-36">
										{/* <span className="flex items-stretch transition-all duration-200 rounded-md px-4 py-2 text-sm"> */}
										Ver activos
										{/* </span> */}
									</Button>
									<Button className="bg-btn-neutral min-w-36">
										Ver amenazas
									</Button>
								</div>
							</main>
						</section>
						<img
							src={managementSvg}
							alt="imagen"
							className="max-w-48 md:max-w-80"
						/>
					</div>
				</div>

				<section className="my-5 flex flex-col justify-center items-center  gap-2 p-3">
					<section className=" flex flex-wrap justify-start items-start md:max-w-screen gap-2 p-3 ">
						<section className="border border-border hover:bg-bg-surface-primary/20 hover:border-border-secondary rounded-md p-4 md:min-w-96 flex justify-between ">
							<section>
								<h2 className="text-text-tertiary/90">Riesgos totales</h2>
								<p className="text-5xl font-bold text-text-tertiary">50</p>
								<span className="text-text-tertiary/70">
									+2 nuevos desde el mes pasado
								</span>
							</section>
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
								className="icon icon-tabler icons-tabler-outline icon-tabler-alert-triangle text-text-tertiary"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M12 9v4" />
								<path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
								<path d="M12 16h.01" />
							</svg>
						</section>

						<section className="border border-border-danger/50 hover:bg-btn-danger-hover/10 hover:border-border-danger rounded-md p-4 md:min-w-96 flex justify-between ">
							<section>
								<h2 className="text-text-danger/90">Riesgos criticos</h2>
								<p className="text-5xl font-bold text-text-danger">7</p>
								<span className="text-text-danger/70">
									+1 nuevos desde el mes pasado
								</span>
							</section>
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
								className="icon icon-tabler icons-tabler-outline icon-tabler-alert-triangle text-text-danger"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M12 9v4" />
								<path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
								<path d="M12 16h.01" />
							</svg>
						</section>

						<section className="border border-border-success/70 hover:bg-btn-success/10 hover:border-border-success rounded-md p-4 md:min-w-96 flex justify-between ">
							<section>
								<h2 className="text-text-success/90">Riesgos mitigados</h2>
								<p className="text-5xl font-bold text-text-success">15</p>
								<span className="text-text-success/70">
									-2 nuevos desde el mes pasado
								</span>
							</section>
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
								className="icon icon-tabler icons-tabler-outline icon-tabler-alert-triangle text-text-success"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M12 9v4" />
								<path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
								<path d="M12 16h.01" />
							</svg>
						</section>
					</section>
				</section>
			</section>
		</>
	);
};

export default Home;
