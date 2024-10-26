import toast from 'react-hot-toast';

export const notify = (message: string) => toast(message ?? 'Notificación');
export const notifyError = (message: string) =>
	toast.error(message ?? 'Ha ocurrido un error');
export const notifySuccess = (message: string) =>
	toast.success(message ?? 'Operación exitosa');
export const notifyLoading = (message: string) =>
	toast.loading(message ?? 'Cargando...');

export const notifyCustom = (message: string) =>
	toast.custom((t) => (
		<div>
			<h1>{message ?? 'Custom toast'}</h1>
			<button onClick={() => toast.dismiss(t.id)}>Cerrar</button>
		</div>
	));
