import { jwtDecode } from 'jwt-decode';
import { createContext, useContext, useState, useEffect } from 'react';
import { fetchMethod } from '../utils/fetchMethod';
import { MethodType, ResponseType } from '../shared/enums/httpEnums';
import { notifyError, notifySuccess } from '../shared/components/RM_Toast';

export interface AuthContextType {
	isAuthenticated: boolean;
	signin: (credentials: unknown) => void;
	signup: (credentials: unknown) => void;
	logout: () => void;
	token: string | null;
	isTokenValid: () => boolean;
	decodeToken: () => unknown | null;
}

export const AuthContext = createContext<AuthContextType>(
	{} as AuthContextType
);

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [token, setToken] = useState<string | null>(null);

	useEffect(() => {
		const storedToken = localStorage.getItem('token');
		if (storedToken && isTokenValid(storedToken)) {
			setToken(storedToken);
			setIsAuthenticated(true);
		}
	}, []);

	const signup = async (credentials: unknown) => {
		try {
			const response = await fetchMethod<{ token: string }>(
				'http://localhost:8080/api/v1/auth/signup',
				MethodType.POST,
				credentials,
				ResponseType.JSON
			);

			if (response?.token) {
				handleTokenLogin(response.token);
				notifySuccess('Usuario creado exitosamente');
			}
		} catch {
			notifyError('Error creando el usuario');
		}
	};

	const signin = async (credentials: unknown) => {
		try {
			const response = await fetchMethod<{ token: string }>(
				'/api/auth/login',
				MethodType.POST,
				credentials,
				ResponseType.JSON
			);
			if (response?.token) {
				handleTokenLogin(response.token);
			}
		} catch {
			notifyError('Error en el inicio de sesión');
		}
	};

	const handleTokenLogin = (newToken: string) => {
		setToken(newToken);
		localStorage.setItem('token', newToken);
		setIsAuthenticated(true);
	};

	const logout = () => {
		setToken(null);
		localStorage.removeItem('token');
		setIsAuthenticated(false);
	};

	const decodeToken = () => {
		try {
			return token ? jwtDecode(token) : null;
		} catch {
			return null;
		}
	};

	const isTokenValid = () => {
		const decoded = decodeToken();
		return decoded ? decoded.exp * 1000 > Date.now() : false;
	};

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated,
				signin,
				signup,
				logout,
				token,
				isTokenValid,
				decodeToken,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
