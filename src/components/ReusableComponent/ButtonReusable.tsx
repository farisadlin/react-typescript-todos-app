type ButtonReusableProps = {
  id?: string;
  name?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  children?: React.ReactNode;
  type?: any
};

const ButtonReusable = ({id, name, onClick, className, children, type}: ButtonReusableProps) => {
  return (
    <>
      <button
        id={id}
        name={name}
        onClick={onClick}
        className={className}
        children={children}
        type={type}
      />
    </>
  );
};

export default ButtonReusable;
