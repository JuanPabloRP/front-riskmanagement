const Playground = () => {
	return (
		<main className="flex flex-col justify-center items-center min-h-screen max-w-3xl">
			<h1>
				En esta sección podran probar colores de los textos, de fondo, border,
				etc.
			</h1>
			<div>
				<h2 className="text-2xl mt-2">Colores texto</h2>
				<p className="text-text-primary">primary</p>
				<p className="text-text-secondary">secondary</p>
				<p className="text-text-tertiary">tertiary</p>
				<p className="text-text-success">success</p>
				<p className="text-text-danger">danger</p>
			</div>
			<div className="flex flex-col gap-2 ">
				<h2 className="text-2xl mt-2">Colores bordes</h2>
				<div className="border bg-bg border-border">primary</div>
				<div className="border bg-bg border-border-secondary">secondary</div>
				<div className="border bg-bg border-border-tertiary">tertiary</div>
				<div className="border bg-bg border-border-success">success</div>
				<div className="border bg-bg border-border-danger">danger</div>
			</div>
			<div>
				<h2 className="text-2xl mt-2">Botones</h2>
				<div className="flex gap-3">
					<button className="p-2 btn bg-btn-primary hover:bg-btn-primary-hover active:bg-btn-primary-active focus:bg-btn-primary-hover">
						primary
					</button>
					<button className="p-2 btn bg-btn-danger hover:bg-btn-danger-hover active:bg-btn-danger-active focus:bg-btn-danger-hover">
						danger
					</button>
					<button className="p-2 btn bg-btn-neutral hover:bg-btn-neutral-hover active:bg-btn-neutral-active focus:bg-btn-neutral-hover">
						neutral
					</button>
					<button className="p-2 btn bg-btn-success hover:bg-btn-success-hover active:bg-btn-success-active focus:bg-btn-success-hover">
						success
					</button>
				</div>

				<div className="flex gap-3">
					<button className="p-2 btn text-btn-primary hover:text-btn-primary-hover active:text-btn-primary-active focus:text-btn-primary-hover">
						primary
					</button>
					<button className="p-2 btn text-btn-danger hover:text-btn-danger-hover active:text-btn-danger-active focus:text-btn-danger-hover">
						secondary
					</button>
					<button className="p-2 btn text-btn-neutral hover:text-btn-neutral-hover active:text-btn-neutral-active focus:text-btn-neutral-hover">
						neutral
					</button>
					<button className="p-2 btn text-btn-success hover:text-btn-success-hover active:text-btn-success-active focus:text-btn-success-hover">
						success
					</button>
				</div>
			</div>
			<div>
				<h2 className="text-2xl mt-2">
					Agregar más bloques de estos de ser necesario
				</h2>
			</div>
		</main>
	);
};

export default Playground;
