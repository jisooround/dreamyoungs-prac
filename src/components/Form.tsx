import styled from "styled-components";
import FormFixedType from "./FormFixedType";
import FormTextType from "./FormTextType";
import FormDateType from "./FormDateType";

const Form = () => (
  <FormStyle>
    <FormFixedType label={"정보 1"} value={"정보 내용"} />
    <FormTextType label={"정보 2"} value={"정보 내용"} />
    <FormFixedType label={"정보 3"} value={"정보 내용"} />
    <FormTextType label={"정보 4"} value={"정보 내용"} />
    <FormDateType label={"날짜"} value={"2012-03-13"} />
    <div>
      <label>정보5</label>
      <RadioBoxStyle>
        <input type="radio" id="선택1" value="선택1" name="info5" />
        <label className="group_input" htmlFor="선택1">
          선택1
        </label>
        <input type="radio" id="선택2" value="선택2" name="info5" />
        <label className="group_input" htmlFor="선택2">
          선택2
        </label>
        <input type="radio" id="선택3" value="선택3" name="info5" />
        <label className="group_input" htmlFor="선택3">
          선택3
        </label>
      </RadioBoxStyle>
    </div>
  </FormStyle>
);

const FormStyle = styled.form`
  margin: 0 2.5rem;
  border-top: 1px solid var(--color-gray-003);
`;

const RadioBoxStyle = styled.div`
  input {
    padding-right: 20px;
  }
  label {
    width: 20px;
    padding-right: 20px;
  }
`;

export default Form;
