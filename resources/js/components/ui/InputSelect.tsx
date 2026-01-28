import React from 'react'

type SelectOption = {
    label: string;
    value: string;
};

type SelectProps = {
    options: SelectOption[];
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    id?: string;
    name?: string;
    className?: string;
    success?: boolean;
    error?: boolean;
    disabled?: boolean;
    hint?: string;
};

const InputSelect: React.FC<SelectProps> = ({
    options,
    placeholder = "Select an option",
    value,
    onChange,
    id,
    name,
    className = "",
    success = false,
    error = false,
    disabled = false,
    hint,
})=> {

    let inputClasses = `h-11 w-full appearance-none rounded-lg border px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  ${
        value
            ? "text-gray-800 dark:text-white/90"
            : "text-gray-400 dark:text-gray-400"
    } ${className}`;

    if (disabled) {
        inputClasses += ` text-gray-500 border-gray-300 opacity-40 bg-gray-100 cursor-not-allowed dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700 opacity-40`;
    } else if (error) {
        inputClasses += ` border-error-500 focus:border-error-300 focus:ring-error-500/20 dark:text-error-400 dark:border-error-500 dark:focus:border-error-800`;
    } else if (success) {
        inputClasses += ` border-success-500 focus:border-success-300 focus:ring-success-500/20 dark:text-success-400 dark:border-success-500 dark:focus:border-success-800`;
    } else {
        inputClasses += ` bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800`;
    }

  return (
        <div className="relative">
            <select
                className={inputClasses}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                id={id}
                name={name}
            >
                <option
                    value=""
                    disabled
                    className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                >
                    {placeholder}
                </option>
                {options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                        className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                    >
                        {option.label}
                    </option>
                ))}
            </select>
            {hint && (
                <p
                    className={`mt-1.5 text-xs ${
                        error
                            ? "text-error-500"
                            : success
                            ? "text-success-500"
                            : "text-gray-500"
                    }`}
                >
                    {hint}
                </p>
            )}
        </div>
    );
}

export default InputSelect