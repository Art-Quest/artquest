interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger";  // Optional, with default set to 'primary'
  className?: string;  // Optional, allows adding additional custom classes
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, variant = "primary", className = "" }) => {
  const baseStyles =
    "px-6 py-3 rounded-full font-bold transition duration-300 ease-in-out focus:outline-none";
  const variants = {
    primary: "bg-black dark:bg-white text-white dark:text-black hover:bg-opacity-90",
    secondary: "bg-gray-300 dark:bg-gray-700 text-black dark:text-white hover:bg-opacity-80",
    danger: "bg-red-600 dark:bg-red-500 text-white hover:bg-opacity-90",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};


interface InputFieldProps {
  label?: string;  // Optional, allows adding a label
  placeholder?: string;  // Optional, placeholder for input field
  type?: string;  // Optional, default is 'text', but can be 'number', 'password', etc.
  value: string | number;  // Required, value of the input field
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;  // Required, change event handler
  className?: string;  // Optional, for custom class names
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className={`flex flex-col mb-4 ${className}`}>
      {label && <label className="font-semibold mb-2 text-gray-700 dark:text-gray-200">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="px-4 py-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
    </div>
  );
};


interface Option {
  value: string | number;  // Value for each option in the dropdown
  label: string;  // Label shown for each option
}

interface SelectProps {
  label?: string;  // Optional, label for the dropdown
  options: Option[];  // Required, array of options for the dropdown
  value: string | number;  // Required, current selected value
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;  // Required, change event handler
  className?: string;  // Optional, for custom class names
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className={`flex flex-col mb-4 ${className}`}>
      {label && <label className="font-semibold mb-2 text-gray-700 dark:text-gray-200">{label}</label>}
      <select
        value={value}
        onChange={onChange}
        className="px-4 py-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
