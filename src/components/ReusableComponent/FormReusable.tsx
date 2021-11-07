type FormReusableProps = {
  type: string;
  id: string;
  name: string;
  className?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  autoComplete?: string;
  children?: React.ReactNode
  defaultValue?: string
  value?: string
  required?: boolean
};

const FormReusable = ({id, name, type = "text", placeholder, onChange, onClick, className, autoComplete, children, defaultValue, value, required}: FormReusableProps) => {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onClick={onClick}
        className={className}
        autoComplete={autoComplete}
        children={children}
        defaultValue={defaultValue}
        value={value}
        required={required}
      />
    </>
  );
};

export default FormReusable;
