import styled from "@emotion/styled";

type FormViewProps = {
  title?: string;
  children?: JSX.Element | JSX.Element[];
};

const FormViewContainer = styled.div`
  h1 {
    text-align: center;
    text-transform: capitalize;
  }
`;

const FormView = ({ children, title }: FormViewProps) => {
  return (
    <FormViewContainer>
      <h1>{title}</h1>
      {children}
    </FormViewContainer>
  );
};

export default FormView;
