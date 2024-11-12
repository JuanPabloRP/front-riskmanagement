import { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { UserType } from '../shared/interfaces/user.interface';

interface UserContextType {
	userInfo: UserType | null;
	fetchUserInfo: () => void;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }) => {
	const [userInfo, setUserInfo] = useState<UserType | null>(null);
	const { token, isAuthenticated, isTokenValid, decodeToken } = useAuth();

	const fetchUserInfo = async () => {
		if (token) {
			try {
				const response = await fetch('/api/user/info', {
					headers: { Authorization: `Bearer ${token}` },
				});
				if (response.ok) {
					const data = await response.json();
					setUserInfo(data);
				} else {
					console.error('Error fetching user info');
				}
			} catch (error) {
				console.error('Error fetching user info:', error);
			}
		}
	};

	const initializeUserInfo = () => {
		if (isTokenValid() && token) {
			const decodedToken = decodeToken();
			setUserInfo(decodedToken?.userInformation);
		}
	};

	useEffect(() => {
		if (isAuthenticated) initializeUserInfo();
	}, [isAuthenticated]);

	return (
		<UserContext.Provider value={{ userInfo, fetchUserInfo }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => useContext(UserContext);
