import { useRef, useState } from 'react';

const useFormData = (initial = {}) => {
	const formRef = useRef(null);
	const [formData, setFormData] = useState(initial);

	// Función para obtener los datos del formulario
	const getFormData = () => {
		const formElement = formRef.current;
		if (!formElement) return formData;

		const formDataObj = {};
		const formDataEntries = new FormData(formElement);

		// Iterar sobre los pares clave/valor de FormData
		formDataEntries.forEach((value, key) => {
			formDataObj[key] = value;
		});

		return formDataObj;
	};

	// Función para actualizar los datos del formulario
	const updateFormData = (event) => {
		if (event) event.preventDefault();
		setFormData(getFormData());
	};

	// Función para resetear el formulario a su estado inicial
	const resetFormData = () => {
		setFormData(initial); // Resetea al estado inicial pasado al hook
		if (formRef.current) formRef.current.reset(); // También resetea el formulario en el DOM
	};

	// Función para setear campos específicos en formData
	const setFormDataFields = (fields, overwrite = false) => {
		setFormData((prevData) =>
			overwrite ? { ...fields } : { ...prevData, ...fields }
		);
	};

	return {
		formRef, // Referencia del formulario
		formData, // Datos actuales del formulario
		updateFormData, // Función para actualizar los datos del formulario
		resetFormData, // Función para resetear el formulario
		setFormDataFields, // Actualizar campos específicos
	};
};

export default useFormData;
