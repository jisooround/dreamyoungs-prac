// API GET data 타입
export interface IData {
  date: string;
  info1: string;
  info2: string;
  info3: string;
  info4: string;
  info5: string;
  info6: string[];
}

// API POST Data 타입
export interface IFormData {
  info2: FormDataEntryValue | null;
  info4: FormDataEntryValue | null;
  date: FormDataEntryValue | null;
  info5: FormDataEntryValue | null;
  info6: FormDataEntryValue[];
}

// GET TestData 타입
export interface ITestData {
  ok: boolean;
  httpcode: 200 | 400 | 500;
  data: IData;
}

// 라디오, 선택 박스 옵션 타입
export interface IOption {
  optionLabel: string;
  optionValue: string;
}

// 소메뉴 카테고리 리스트 타입
export interface ICategoryList {
  label: string;
  path: string;
}
