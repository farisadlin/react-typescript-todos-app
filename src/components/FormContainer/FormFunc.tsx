import styled from "@emotion/styled";
import FormReusable from "../ReusableComponent/FormReusable";
import { MdAdd } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import ButtonReusable from "components/ReusableComponent/ButtonReusable";
import { useState } from "react";


const InputContainer = styled.div<FormFuncProps>`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 20px auto;

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
    border-radius: 0;
    color: white;

    svg {
      text-align: center;
      font-size: 1.5rem;
      color: white;
    }
  }

  .input-container:hover {
    filter: brightness(50%);
    color: white;
  }
`;

const DisplayResultContainer = styled.div`
display: flex
align-items: center;
justify-content: center;
width: 100%;
margin-top: 20px;

input{
width: 500px;
}
`;

const ButtonContainer = styled.div<FormFuncProps>`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    cursor: pointer;
    background-color: ${(props: any) =>
      props.greenColor ? "green" : props.redColor ? "red" : "DodgerBlue"};
    border: none;
    border-radius: 0;
    color: white;

    &:hover {
      filter: brightness(50%);
      color: white;
    }
  }
  svg {
    text-align: center;
    font-size: 1.5rem;
    color: white;
  }
`;

type FormFuncProps = {
  todo?: string;
  greenColor?: any;
  redColor?: any;
  backgroundColor?: string;
  id?: number;
};


const FormFunc = () => {
  const [todoList, setTodoList] = useState<FormFuncProps[] | any>([]);

  todoList?.forEach((item: any, index: number) => {
    item.id = index + 1;
  });

  const deleteTodoList = (e: any, id: number) => {
    e.preventDefault();
    let newArr = [...todoList];
    const foundIndex = newArr.findIndex((item: any) => item.id === id);
    newArr.splice(foundIndex, 1);
    setTodoList(newArr);
  };

  const editTodoList = (e: any, todoListIndex: any) => {
    e.preventDefault();
    let newArr: any = [...todoList];
    const foundIndex = newArr.findIndex(
      (item: any, key: any) => key === todoListIndex
    );

    newArr[foundIndex].todo = e.target[`edit_input[${todoListIndex}]`].value;
    setTodoList(newArr);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      add_new: { value: string };
    };
    setTodoList([...todoList, { todo: target?.add_new?.value }]);
    target.add_new.value = "";
  };

  const handleChange = (e: any, todoListIndex: any) => {
    e.preventDefault();
    const newValue = e.target.value;
    let newArr: any = [...todoList];
    const foundIndex = newArr.findIndex(
      (item: any, key: any) => key === todoListIndex
    );

    newArr[foundIndex].todo = newValue;
    setTodoList(newArr);
  };

  return (
    <>
      <form
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <InputContainer>
          <FormReusable
            id="add_new"
            name="add_new"
            placeholder="Type ..."
            type="text"
            required
          />
          <ButtonReusable className="input-container">
            <MdAdd />
          </ButtonReusable>
        </InputContainer>
      </form>

      <DisplayResultContainer>
        {todoList.map((item: any, todoListIndex: number) => (
          <form
            onSubmit={(e: React.SyntheticEvent) => {
              editTodoList(e, todoListIndex);
            }}
          >
            <InputContainer>
              <FormReusable
                id={`edit_input[${todoListIndex}]`}
                name={`edit_input[${todoListIndex}]`}
                placeholder="Type ..."
                type="text"
                onChange={(e) => {
                  handleChange(e, todoListIndex);
                }}
                value={item.todo}
              />
              <ButtonContainer greenColor>
                <ButtonReusable type="submit">
                  <FiEdit2 />
                </ButtonReusable>
              </ButtonContainer>
              <ButtonContainer redColor>
                <ButtonReusable
                  onClick={(e) => {
                    deleteTodoList(e, item.id);
                  }}
                >
                  <MdDeleteOutline />
                </ButtonReusable>
              </ButtonContainer>
            </InputContainer>
          </form>
        ))}
      </DisplayResultContainer>
    </>
  );
};

export default FormFunc;
