import { MethodType, ResponseType } from "../shared/enums/httpEnums";


export const fetchMethod = async <T>(
	url: string,
	method: MethodType = MethodType.GET,
	body: object | null = null,
	responseType: ResponseType = ResponseType.JSON,
	options: RequestInit = {},
	requireAuth: boolean = true
): Promise<T> => {
	const token = requireAuth ? localStorage.getItem('token') : null;

	const headers: HeadersInit = {
		'Content-Type': 'application/json',
		...(token && { Authorization: `Bearer ${token}` }),
		...(options.headers || {}),
	};

	const requestOptions: RequestInit = {
		method,
		headers,
		...options,
	};

	if (body !== null && typeof body === 'object') {
		requestOptions.body = JSON.stringify(body);
	}

	try {
		const response = await fetch(url, requestOptions);

		if (!response.ok) {
			throw new Error(
				`Error en la solicitud a ${url}: ${response.statusText} (Status: ${response.status})`
			);
		}

		switch (responseType) {
			case ResponseType.JSON:
				return (await response.json()) as T;
			case ResponseType.BLOB:
				return (await response.blob()) as unknown as T;
			case ResponseType.TEXT:
				return (await response.text()) as unknown as T;
			default:
				throw new Error('Tipo de respuesta no soportado');
		}
	} catch (error) {
		console.error('Error en la solicitud:', error);
		throw error;
	}
};
