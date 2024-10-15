const Playground = () => {
	return (
		<main>
			<h1>
				En esta sección podran probar colores de los textos, de fondo, border,
				etc. (Pueden ir hasta App.tsx y comentar donde se llama esto por si no
				quieren ver el playground)
			</h1>
			<div>
				<h2 className="text-2xl mt-2">Colores texto</h2>
				<p className="text-color-text-primary">primary</p>
				<p className="text-color-text-secondary">secondary</p>
				<p className="text-color-text-tertiary">tertiary</p>
				<p className="text-color-text-success">success</p>
				<p className="text-color-text-danger">danger</p>
			</div>
			<div className="flex flex-col gap-2 ">
				<h2 className="text-2xl mt-2">Colores bordes</h2>
				<div className="border bg-color-bg border-color-border">primary</div>
				<div className="border bg-color-bg border-color-border-secondary">
					secondary
				</div>
				<div className="border bg-color-bg border-color-border-tertiary">
					tertiary
				</div>
				<div className="border bg-color-bg border-color-border-success">
					success
				</div>
				<div className="border bg-color-bg border-color-border-danger">
					danger
				</div>
			</div>
			<div>
				<h2 className="text-2xl mt-2">Botones</h2>
				<div className="flex gap-3">
					<button className="p-2 btn bg-color-btn-primary hover:bg-color-btn-primary-hover active:bg-color-btn-primary-active focus:bg-color-btn-primary-hover">
						primary
					</button>
					<button className="p-2 btn bg-color-btn-danger hover:bg-color-btn-danger-hover active:bg-color-btn-danger-active focus:bg-color-btn-danger-hover">
						danger
					</button>
					<button className="p-2 btn bg-color-btn-neutral hover:bg-color-btn-neutral-hover active:bg-color-btn-neutral-active focus:bg-color-btn-neutral-hover">
						neutral
					</button>
					<button className="p-2 btn bg-color-btn-success hover:bg-color-btn-success-hover active:bg-color-btn-success-active focus:bg-color-btn-success-hover">
						success
					</button>
				</div>

				<div className="flex gap-3">
					<button className="p-2 btn text-color-btn-primary hover:text-color-btn-primary-hover active:text-color-btn-primary-active focus:text-color-btn-primary-hover">
						primary
					</button>
					<button className="p-2 btn text-color-btn-danger hover:text-color-btn-danger-hover active:text-color-btn-danger-active focus:text-color-btn-danger-hover">
						secondary
					</button>
					<button className="p-2 btn text-color-btn-neutral hover:text-color-btn-neutral-hover active:text-color-btn-neutral-active focus:text-color-btn-neutral-hover">
						neutral
					</button>
					<button className="p-2 btn text-color-btn-success hover:text-color-btn-success-hover active:text-color-btn-success-active focus:text-color-btn-success-hover">
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
