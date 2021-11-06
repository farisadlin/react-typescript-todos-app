type ButtonReusableProps = {
  id?: string;
  name?: string;
  className?: string;
  onClick?: (props: void) => void;
  children?: React.ReactNode

};

const ButtonReusable = ({id, name, onClick, className, children}: ButtonReusableProps) => {
  return (
    <>
      <button
        id={id}
        name={name}
        onClick={() => onClick}
        className={className}
        children={children}
      />
    </>
  );
};

export default ButtonReusable;
