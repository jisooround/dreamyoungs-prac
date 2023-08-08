import Form from "../components/Form";
import Title from "../components/Title";
import { api } from "../api/apiControl";
import { useEffect, useState } from "react";
import { ITestData } from "../types/data";

const Page1 = () => {
  const [testData, setTestData] = useState<ITestData | undefined>();
  console.log(testData?.data);

  useEffect(() => {
    async function getTest() {
      const res = await api.getData();
      setTestData(res);
    }
    getTest();
  }, []);

  return (
    <div>
      <Title content={"타이틀"} />
      <Form data={testData?.data} />
    </div>
  );
};

export default Page1;
