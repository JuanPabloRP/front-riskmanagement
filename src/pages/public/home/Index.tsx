import { PATHS } from '../../../shared/constants/routes.constant';
import RM_Link from '../../../shared/components/RM_Link';

const Index = () => {
	return (
		<div>
	  		<div className="min-h-screen  flex flex-col items-center text-center p-6">
          {/* Header */}
          <header className="w-full border-2 text-text-tertiary py-6 shadow-lg mb-8">
            <h1 className="text-4xl font-bold">Control de Riesgos Avanzado</h1>
           <p className="text-xl mt-2 text-white">Gestione riesgos, fortalezca su seguridad</p>
           </header>

      {/* Main Content */}
        <main className="flex flex-col items-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-text-tertiary  mb-4">
          Tome el control de la seguridad de su empresa
        </h2>
        <p className="text-lg text-white mb-8 px-4">
          Nuestro software de gestión de riesgos le permite identificar, analizar y tratar
          las amenazas en sus activos críticos, asegurando la continuidad de su negocio.
          Descubra las funcionalidades de vanguardia que harán la diferencia.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-text-secondary mb-2">Control de Riesgos</h3>
            <p className="text-gray-600">
              Identifique y evalúe los riesgos potenciales que puedan afectar sus activos
              y operaciones.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-text-secondary mb-2">Gestión de Activos</h3>
            <p className="text-gray-600">
              Mantenga un inventario completo de sus activos y realice un seguimiento de su
              importancia y vulnerabilidad.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-text-secondary mb-2">Vulnerabilidades</h3>
            <p className="text-gray-600">
              Identifique y mitigue las vulnerabilidades que puedan comprometer sus sistemas
              y datos.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-text-secondary mb-2">Plan de Tratamiento</h3>
            <p className="text-gray-600">
              Desarrolle y ejecute planes de acción para gestionar riesgos y minimizar el
              impacto en su organización.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-text-secondary mb-2">Amenazas</h3>
            <p className="text-gray-600">
              Monitoree y anticipe amenazas en tiempo real, protegiendo su empresa contra
              ataques.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-blue-600 text-white py-6 px-10 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Proteja su empresa hoy</h2>
          <p className="text-lg mt-2">
            Adquiera nuestro software y obtenga acceso exclusivo a herramientas
            avanzadas para el control de riesgos.
          </p>
          <button
            onClick={() => alert("Redireccionando a la página de compra...")}
            className="mt-6 bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Comience ahora
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 text-gray-600">
        <p>&copy; {new Date().getFullYear()} Control de Riesgos. Todos los derechos reservados.</p>
      </footer>
    </div>
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
