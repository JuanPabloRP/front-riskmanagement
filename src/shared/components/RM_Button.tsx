interface ButtonProps {
	children: React.ReactNode;
	icon?: React.ReactNode;
	disabled?: boolean;
	onClick: (e: React.FormEvent<HTMLFormElement>) => void;
	type?: 'button' | 'submit' | 'reset';
	className?: string;
}

const RM_Button: React.FC<ButtonProps> = ({
	icon,
	children,
	onClick,
	disabled,
	type,
	className,
}) => {
	return (
		<div className="w-full md:w-fit">
			<button
				className={`group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none border border-transparent text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-cyan-800 dark:bg-cyan-600 dark:focus:ring-cyan-800 dark:enabled:hover:bg-cyan-700 rounded-lg bg-btn-primary hover:bg-btn-primary-hover focus:bg-btn-primary-hover active:bg-btn-primary-active px-3 py-2 w-full ${className}`}
				onClick={(e) => onClick(e)}
				type={type}
				disabled={disabled}
			>
				{icon && (
					<span className="absolute inset-y-0 left-0 flex items-center pl-3">
						{icon}
					</span>
				)}

				{children}
			</button>
		</div>
	);
};

export default RM_Button;
