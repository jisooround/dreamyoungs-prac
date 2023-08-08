// Form 양식 컴포넌트
import styled from "styled-components";
import FormFixedType from "./FormFixedType";
import FormTextType from "./FormTextType";
import FormDateType from "./FormDateType";
import FormRadioType from "./FormRadioType";
import Button from "./ui/Button";
import { IData } from "../types/data";
import FormCheckType from "./FormCheckType";
import { api } from "../api/apiControl";
import { formatDate } from "../utils/formatDate";

type Props = {
  data?: IData;
};

// 라디오박스 옵션 리스트
const radioOptionList = [
  {
    optionLabel: "선택1",
    optionValue: "radio_1",
  },
  {
    optionLabel: "선택2",
    optionValue: "radio_2",
  },
  {
    optionLabel: "선택3",
    optionValue: "radio_3",
  },
];

// 체크박스 옵션 리스트
const checkOptionList = [
  {
    optionLabel: "선택1",
    optionValue: "check_1",
  },
  {
    optionLabel: "선택2",
    optionValue: "check_2",
  },
  {
    optionLabel: "선택3",
    optionValue: "check_3",
  },
];

const Form = ({ data }: Props) => {
  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // form data 접근
    const formData = new FormData(event.currentTarget);
    const getFormData = {
      info2: formData.get("info2"),
      info4: formData.get("info4"),
      date: formatDate(formData.get("date")?.toString()),
      info5: formData.get("info5"),
      info6: formData.getAll("info6"),
    };
    // post 함수 작동
    api.postData(getFormData);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <FormFixedType name={"info1"} label={"정보 1"} value={data?.info1} />
      <FormTextType name={"info2"} label={"정보 2"} value={data?.info2} />
      <FormFixedType name={"info3"} label={"정보 3"} value={data?.info3} />
      <FormTextType name={"info4"} label={"정보 4"} value={data?.info4} />
      <FormDateType name={"date"} label={"날짜"} value={data?.date} />
      <FormRadioType
        name={"info5"}
        options={radioOptionList}
        label={"정보 5"}
        value={data?.info5}
      />
      <FormCheckType
        name={"info6"}
        options={checkOptionList}
        label={"정보 6"}
        value={data?.info6}
      />
      <Button content={"저장"} />
    </FormStyle>
  );
};

const FormStyle = styled.form`
  margin: 0 40px;
  padding: 20px 0;
  border-top: 1px solid var(--color-gray-003);
  border-bottom: 1px solid var(--color-gray-002);
  position: relative;
`;

export default Form;
