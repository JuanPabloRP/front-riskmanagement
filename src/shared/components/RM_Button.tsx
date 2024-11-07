import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
	children?: React.ReactNode;
	icon?: React.ReactNode;
	disabled?: boolean;
	onClick: (e: React.FormEvent<HTMLFormElement>) => void;
	type?: 'button' | 'submit' | 'reset';
	className?: string;
	variant?: 'primary' | 'danger' | 'neutral' | 'success';
	hasBackground?: boolean;
}

const RM_Button: React.FC<ButtonProps> = ({
	icon,
	children,
	onClick,
	disabled = false,
	type = 'button',
	className,
	variant = 'primary',
	hasBackground = true,
}) => {
	const buttonClass = classNames(
		'group relative flex items-center justify-center p-0.5 text-center font-medium transition focus:z-10 focus:outline-none rounded-lg px-3 py-2 w-full',
		{
			// Estilos cuando hasBackground es true
			'bg-btn-primary hover:bg-btn-primary-hover focus:bg-btn-primary-hover active:bg-btn-primary-active text-white border border-transparent':
				hasBackground && variant === 'primary',
			'bg-btn-danger hover:bg-btn-danger-hover  focus:bg-btn-danger-hover active:bg-sbtn-danger-active text-white border border-transparent':
				hasBackground && variant === 'danger',
			'bg-btn-neutral hover:bg-btn-neutral-hover focus:bg-btn-neutral-hover active:bg-btn-neutral-active text-text-primary border border-transparent':
				hasBackground && variant === 'neutral',
			'bg-btn-success hover:bg-green-700 focus:bg-green-700 active:bg-green-800 text-white border border-transparent':
				hasBackground && variant === 'success',

			// Estilos cuando hasBackground es false: cambia el color de texto y borde
			'text-btn-secondary border-btn-secondary border hover:bg-btn-primary-hover focus:bg-btn-primary-hover active:bg-btn-primary-active':
				!hasBackground && variant === 'primary',
			' text-text-secondary border border-btn-primary-active  hover:bg-secondary-hover focus:bg-secondary-hover active:bg-secondary-active':
				!hasBackground && variant === 'danger',
			'text-btn-neutral border-btn-neutral border hover:bg-btn-neutral-hover focus:bg-btn-neutral-hover active:bg-btn-neutral-active':
				!hasBackground && variant === 'neutral',
			'text-btn-success border-btn-success border hover:bg-green-700 focus:bg-green-700 active:bg-green-800':
				!hasBackground && variant === 'success',
		},
		className
	);

	return (
		<div className="w-full md:w-fit">
			<button
				className={`p-2 ${buttonClass}`}
				onClick={(e) => onClick(e)}
				type={type}
				disabled={disabled}
			>
				{icon && (
					<span className={` flex items-center ${children ? 'pl-3' : 'p-0'}`}>
						{icon}
					</span>
				)}
				{children}
			</button>
		</div>
	);
};

export default RM_Button;
