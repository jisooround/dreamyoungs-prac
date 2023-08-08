// TestData.data 타입
export interface IData {
  date: string;
  info1: string;
  info2: string;
  info3: string;
  info4: string;
  info5: string;
  info6: string[];
}

export interface IFormData {
  info2: FormDataEntryValue | null;
  info4: FormDataEntryValue | null;
  date: FormDataEntryValue | null;
  info5: FormDataEntryValue | null;
  info6: FormDataEntryValue[];
}

// // TestData 타입
export interface ITestData {
  ok: boolean;
  httpcode: 200 | 400 | 500;
  data: IData;
}

export interface IOption {
  optionLabel: string;
  optionValue: string;
}
