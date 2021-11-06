type FormReusableProps = {
  type: string;
  id: string;
  name: string;
  className?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (props: void) => void;
  autoComplete?: string;
  children?: React.ReactNode
  defaultValue?: string
  value?: string
  
};

const FormReusable = ({id, name, type = "text", placeholder, onChange, onClick, className, autoComplete, children, defaultValue, value}: FormReusableProps) => {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={() => onChange}
        onClick={() => onClick}
        className={className}
        autoComplete={autoComplete}
        children={children}
        defaultValue={defaultValue}
        value={value}

      />
    </>
  );
};

export default FormReusable;
