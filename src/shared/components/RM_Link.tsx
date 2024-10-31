import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

interface LinkProps {
	to: string;
	children: React.ReactNode;
	className?: string;
	variant?: 'link' | 'button';
	color?: 'primary' | 'secondary' | 'danger' | 'success';
	hasBackground?: boolean;
	icon?: React.ReactNode;
	onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const RM_Link: React.FC<LinkProps> = ({
	to,
	children,
	className,
	variant = 'link',
	color = 'primary',
	hasBackground = true,
	icon,
	onClick,
}) => {
	const linkClass = classNames(
		'transition font-medium flex items-center',
		{
			// Estilos de botón con fondo, según color
			'px-3 py-2 rounded-lg text-white bg-btn-primary hover:bg-btn-primary-hover focus:bg-btn-primary-hover active:bg-btn-primary-active':
				variant === 'button' && color === 'primary' && hasBackground,
			'px-3 py-2 rounded-lg text-white bg-secondary hover:bg-secondary-hover focus:bg-secondary-hover active:bg-secondary-active':
				variant === 'button' && color === 'secondary' && hasBackground,
			'px-3 py-2 rounded-lg text-white bg-red-600 hover:bg-red-700 focus:bg-red-700 active:bg-red-800':
				variant === 'button' && color === 'danger' && hasBackground,
			'px-3 py-2 rounded-lg text-white bg-green-600 hover:bg-green-700 focus:bg-green-700 active:bg-green-800':
				variant === 'button' && color === 'success' && hasBackground,

			// Estilos de botón sin fondo, solo borde y texto, según color
			'text-btn-primary border border-btn-primary px-3 py-2 rounded-lg hover:bg-btn-primary-hover focus:bg-btn-primary-hover active:bg-btn-primary-active':
				variant === 'button' && color === 'primary' && !hasBackground,
			'text-secondary border border-secondary px-3 py-2 rounded-lg hover:bg-secondary-hover focus:bg-secondary-hover active:bg-secondary-active':
				variant === 'button' && color === 'secondary' && !hasBackground,
			'text-red-600 border border-red-600 px-3 py-2 rounded-lg hover:bg-red-700 focus:bg-red-700 active:bg-red-800':
				variant === 'button' && color === 'danger' && !hasBackground,
			'text-green-600 border border-green-600 px-3 py-2 rounded-lg hover:bg-green-700 focus:bg-green-700 active:bg-green-800':
				variant === 'button' && color === 'success' && !hasBackground,

			// Estilos de enlace simple según color
			'text-cyan-600 hover:text-cyan-700 underline':
				variant === 'link' && color === 'primary',
			'text-gray-600 hover:text-gray-700 underline':
				variant === 'link' && color === 'secondary',
			'text-red-600 hover:text-red-700 underline':
				variant === 'link' && color === 'danger',
			'text-green-600 hover:text-green-700 underline':
				variant === 'link' && color === 'success',
		},
		className
	);

	return (
		<NavLink to={to} className={linkClass} onClick={onClick}>
			{icon && <span className="mr-2">{icon}</span>}
			{children}
		</NavLink>
	);
};

export default RM_Link;
