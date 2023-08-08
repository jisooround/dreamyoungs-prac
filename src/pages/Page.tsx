// 페이지 (재사용)
import Form from "../components/Form";
import Title from "../components/ui/Title";
import { api } from "../api/apiControl";
import { useEffect, useState } from "react";
import { ITestData } from "../types/data";
import { useLocation } from "react-router-dom";

const Page = () => {
  const [testData, setTestData] = useState<ITestData | undefined>();
  const { pathname } = useLocation();
  useEffect(() => {
    async function getTest() {
      const res = await api.getData();
      setTestData(res);
    }
    getTest();
  }, [pathname]);

  return (
    <div>
      <Title content={"타이틀"} />
      <Form data={testData?.data} />
    </div>
  );
};

export default Page;
