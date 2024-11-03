import React, { ChangeEvent, useState } from 'react';

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
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newValue =
			type === 'number' ? Number(e.target.value) : e.target.value;
		onChange(newValue);
	};

	const togglePasswordVisibility = () => {
		setIsPasswordVisible(!isPasswordVisible);
	};

	const inputType = type === 'password' && isPasswordVisible ? 'text' : type;

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
					type={inputType}
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
				{type === 'password' && (
					<button
						type="button"
						onClick={togglePasswordVisibility}
						className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 focus:outline-none  pl-10"
					>
						{isPasswordVisible ? (
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
								className="icon icon-tabler icons-tabler-outline icon-tabler-eye-off"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
								<path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
								<path d="M3 3l18 18" />
							</svg>
						) : (
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
								className="icon icon-tabler icons-tabler-outline icon-tabler-eye"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
								<path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
							</svg>
						)}
					</button>
				)}
			</div>
			{error && <p className="mt-1 text-xs text-red-500">{error}</p>}
		</div>
	);
};

export default RM_Input;
