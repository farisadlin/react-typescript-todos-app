import FormFunc from "./FormFunc"
import FormView from "./FormView"

type FormContainerProps = {
    title?: string,
    children?: JSX.Element | JSX.Element[];
}

const FormContainer = ({}: FormContainerProps) => {
    return (
        <FormView title={"making a todos app with Typescript"}>
            <FormFunc />
        </FormView>
    )
}

export default FormContainer
