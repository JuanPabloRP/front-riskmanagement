import { ChangeEvent } from 'react';

export interface OptionProps {
	label: string;
	value: string | number;
}

interface SelectFieldProps {
	label?: string;
	value: string | number | Date | undefined;
	onChange: (value: string | number) => void;
	error?: string;
	options: OptionProps[];
	disabled?: boolean;
	required?: boolean;
	defaultValue?: string;
	name?: string;
}

const RM_Select: React.FC<SelectFieldProps> = ({
	label,
	value,
	onChange,
	error,
	options,
	disabled = false,
	required = false,
	defaultValue,
	name,
}) => {
	const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const newValue = e.target.value;

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
				<select
					value={value as string}
					defaultValue={defaultValue}
					onChange={handleSelectChange}
					disabled={disabled}
					className={`w-full p-2 border rounded-lg outline-none focus:ring-2 ${
						error
							? 'border-border-danger focus:ring-border-danger'
							: 'border-border-secondary focus:ring-border-secondary'
					} ${disabled ? 'bg-gray-100' : 'bg-white'} text-text-disabled`}
					required={required}
				>
					<option key={-1} value="" disabled hidden>
						Selecciona un {name}
					</option>
					{options.map(({ value, label }) => (
						<option key={value} value={value}>
							{label}
						</option>
					))}
				</select>
			</div>
			{error && <p className="mt-1 text-xs text-red-500">{error}</p>}
		</div>
	);
};

export default RM_Select;
