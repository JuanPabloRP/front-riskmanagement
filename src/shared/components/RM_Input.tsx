import React, { ChangeEvent } from 'react';

interface InputFieldProps {
	label?: string;
	type?: string;
	placeholder?: string;
	value: string | number | Date | undefined;
	onChange: (value: string | number) => void;
	error?: string;
	icon?: React.ReactNode;
	disabled?: boolean;
	required?: boolean;
	min?: number;
	max?: number;
}

const RM_Input: React.FC<InputFieldProps> = ({
	label,
	type = 'text',
	placeholder = '',
	value,
	onChange,
	error,
	icon,
	disabled = false,
	required = false,
	min,
	max,
}) => {
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newValue =
			type === 'number' ? Number(e.target.value) : e.target.value;

		console.log(newValue);
		onChange(newValue);
	};

	return (
		<div className="flex flex-col mb-4 w-full">
			{label && (
				<label className="mb-1 text-sm font-medium text-text-tertiary">
					{label} {required && <span className="text-red-500">*</span>}
				</label>
			)}
			<div className="relative">
				{icon && (
					<span className="absolute inset-y-0 left-0 flex items-center pl-3">
						{icon}
					</span>
				)}
				<input
					type={type}
					placeholder={placeholder}
					value={value as string}
					onChange={handleInputChange}
					disabled={disabled}
					className={`w-full p-2 pl-${
						icon ? '10' : '4'
					} border rounded-lg outline-none focus:ring-2 ${
						error
							? 'border-border-danger focus:ring-border-danger'
							: 'border-border-secondary focus:ring-border-secondary'
					} ${disabled ? 'bg-gray-100' : 'bg-white'} text-text-disabled`}
					required={required}
					min={type === 'number' ? min : undefined}
					max={type === 'number' ? max : undefined}
				/>
			</div>
			{error && <p className="mt-1 text-xs text-red-500">{error}</p>}
		</div>
	);
};

export default RM_Input;
