import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

interface LinkProps {
	to: string;
	children: React.ReactNode;
	className?: string;
	variant?: 'link' | 'button';
	color?: 'primary' | 'secondary' | 'danger' | 'success' | 'neutral';
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
		'transition duration-200 font-medium flex items-center rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2',
		{
			// Botón con fondo
			'px-3 py-2 text-white border-transparent':
				variant === 'button' && hasBackground,
			'bg-btn-primary hover:bg-btn-primary-hover active:bg-btn-primary-active focus:ring-btn-primary':
				variant === 'button' && color === 'primary' && hasBackground,
			'bg-secondary hover:bg-secondary-hover active:bg-secondary-active focus:ring-secondary':
				variant === 'button' && color === 'secondary' && hasBackground,
			'bg-red-600 hover:bg-red-700 active:bg-red-800 focus:ring-red-600':
				variant === 'button' && color === 'danger' && hasBackground,
			'bg-green-600 hover:bg-green-700 active:bg-green-800 focus:ring-green-600':
				variant === 'button' && color === 'success' && hasBackground,
			'bg-gray-600 hover:bg-gray-700 active:bg-gray-800 focus:ring-gray-600':
				variant === 'button' && color === 'neutral' && hasBackground,

			// Botón sin fondo, con borde y texto
			'px-3 py-2 border  text-text-tertiary  border-btn-primary-active hover:bg-btn-primary-light active:bg-btn-primary-active focus:ring-btn-primary':
				variant === 'button' && color === 'primary' && !hasBackground,
			'px-3 py-2 border border-secondary text-text-secondary hover:bg-secondary-light active:bg-secondary-active focus:ring-secondary':
				variant === 'button' && color === 'secondary' && !hasBackground,
			'px-3 py-2 border border-red-600 text-red-600 hover:bg-red-100 active:bg-red-200 focus:ring-red-600':
				variant === 'button' && color === 'danger' && !hasBackground,
			'px-3 py-2 border border-green-600 text-green-600 hover:bg-green-100 active:bg-green-200 focus:ring-green-600':
				variant === 'button' && color === 'success' && !hasBackground,
			'px-3 py-2 border border-gray-600 text-gray-600 hover:bg-gray-100 active:bg-gray-200 focus:ring-gray-600':
				variant === 'button' && color === 'neutral' && !hasBackground,

			// Estilos de enlace
			underline: variant === 'link',
			'text-btn-primary hover:text-btn-primary-hover focus:ring-btn-primary':
				variant === 'link' && color === 'primary',
			'text-secondary hover:text-secondary-hover focus:ring-secondary':
				variant === 'link' && color === 'secondary',
			'text-red-600 hover:text-red-700 focus:ring-red-600':
				variant === 'link' && color === 'danger',
			'text-green-600 hover:text-green-700 focus:ring-green-600':
				variant === 'link' && color === 'success',
			'text-gray-600 hover:text-gray-700 focus:ring-gray-600':
				variant === 'link' && color === 'neutral',
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
