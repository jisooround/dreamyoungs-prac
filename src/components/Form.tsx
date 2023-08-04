import styled from "styled-components";
import FormFixedType from "./FormFixedType";
import FormTextType from "./FormTextType";
import FormDateType from "./FormDateType";
import FormRadioType from "./FormRadioType";
import Button from "../components/Button";
import FormCheckType from "./FormCheckType";

const Form = () => {
  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log(formData.get("정보 5"));
  };

  const radioOptionList = ["선택1", "선택2", "선택3"];

  return (
    <FormStyle onSubmit={submitHandler}>
      <FormFixedType label={"정보 1"} value={"정보 내용"} />
      <FormTextType label={"정보 2"} value={"정보 내용"} />
      <FormFixedType label={"정보 3"} value={"정보 내용"} />
      <FormTextType label={"정보 4"} value={"정보 내용"} />
      <FormDateType label={"날짜"} value={"2012-03-13"} />
      <FormRadioType
        options={radioOptionList}
        label={"정보 5"}
        value={"선택1"}
      />
      <FormCheckType
        options={radioOptionList}
        label={"정보 6"}
        value={"선택1"}
      />
      <Button content={"저장"} />
    </FormStyle>
  );
};

const FormStyle = styled.form`
  margin: 0 2.5rem;
  border-top: 1px solid var(--color-gray-003);
`;

export default Form;
