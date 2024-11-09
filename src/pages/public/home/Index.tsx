import { PATHS } from '../../../shared/constants/routes.constant';
import RM_Link from '../../../shared/components/RM_Link';

const Index = () => {
	return (
		<div>
			<h1>Página inicial</h1>
			<section className="flex flex-col justify-center items-center">
				<h2 className="text-2xl text-text-tertiary ">Ir a la sección:</h2>
				<section className="flex flex-col gap-1">
					<RM_Link to={PATHS.private.home}>
						<span className="text-lg">Inicio privado</span>
					</RM_Link>
				</section>
			</section>
		</div>
	);
};

export default Index;
