import React, { useState } from 'react';

interface DropdownProps {
	title: string;
	icon: React.ReactNode;
	children: React.ReactNode;
	isOpen: boolean;
}

const RM_Dropdown: React.FC<DropdownProps> = ({
	title,
	icon,
	children,
	isOpen,
}) => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div>
			<button
				onClick={() => setIsExpanded(!isExpanded)}
				className="flex items-center w-full p-2 hover:bg-accent rounded-md transition-colors duration-200"
				aria-expanded={isExpanded}
			>
				{icon}
				<span className={`ml-2 ${isOpen ? '' : 'lg:hidden'}`}>{title}</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className={`icon icon-tabler icons-tabler-outline icon-tabler-chevron-down ml-auto transition-transform duration-200 ${
						isExpanded ? 'rotate-180' : ''
					} ${isOpen ? '' : 'lg:hidden'}`}
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M6 9l6 6l6 -6" />
				</svg>
			</button>
			{isExpanded && <div className="ml-4 mt-2 space-y-2">{children}</div>}
		</div>
	);
};

export default RM_Dropdown;
