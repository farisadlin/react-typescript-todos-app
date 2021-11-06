import styled from "@emotion/styled";
import FormReusable from "../FormReusable";
import { GrFormAdd } from "react-icons/gr";
import ButtonReusable from "../ButtonReusable";
import { useState } from "react";

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  #add_new {
    width: 500px;
  }

  .input-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    cursor: pointer;
    background-color: DodgerBlue;
    border: none;
    color: white;

    svg {
      text-align: center;
      font-size: 1.5rem;
    }
  }

  .input-container:hover {
    background-color: aqua;
    color: white;
  }
`;

const DisplayResultContainer = styled.div`
display: flex
align-items: center;
justify-content: center;

p{
    text-align: center;
}
`;

const FormFunc = () => {
  const [todoList, setTodoList] = useState([{}]);

  return (
    <>
      <form
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();
          const target = e.target as typeof e.target & {
            add_new: { value: string };
          };

          setTodoList([...todoList, { todo: target.add_new.value }]);
        }}
      >
        <InputContainer>
          <FormReusable
            id="add_new"
            name="add_new"
            placeholder="Type ..."
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const newValue = e.target.value;
                console.log(newValue)
              }}
          />
          <ButtonReusable className="input-container">
            <GrFormAdd />
          </ButtonReusable>
        </InputContainer>
      </form>

      {todoList.map((item: any, todoListIndex) => (
        <form
          onSubmit={(e: React.SyntheticEvent) => {
            e.preventDefault();
            const target = e.target as typeof e.target & {
                edit_input: { value: string };
            };

            let newArr: any = [...todoList]

            
            const foundIndex = newArr.findIndex((item: any, key: any) => key === todoListIndex)

            console.log(target?.edit_input?.value )
            
           newArr[foundIndex].todo = target?.edit_input?.value 

        setTodoList(newArr);
          }}
        >
          <InputContainer>
            <FormReusable
              id={`edit_input[${todoListIndex}]`}
              name={`edit_input[${todoListIndex}]`}
              placeholder="Type ..."
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const newValue = e.target.value;
                console.log(e)
              }}
              defaultValue={item.todo}
            />
            <ButtonReusable className="input-container">
              <GrFormAdd />
            </ButtonReusable>
          </InputContainer>
        </form>
      ))}
    </>
  );
};

export default FormFunc;
