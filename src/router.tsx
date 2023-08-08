// 라우터 관리
import { createBrowserRouter } from "react-router-dom";
import { Router as RemixRouter } from "@remix-run/router/dist/router";
import Page from "./pages/Page";
import NotFound from "./pages/NotFound";
import GeneralLayout from "./components/GeneralLayout";

interface RouterBase {
  id: number; // 페이지 아이디 (반복문용 고유값)
  path: string; // 페이지 경로
  label: string; // 사이드바에 표시할 페이지 이름
  element: React.ReactNode; // 페이지 엘리먼트
}

export const routerData: RouterBase[] = [
  {
    id: 1,
    path: "/",
    label: "page1",
    element: <Page />,
  },
  {
    id: 2,
    path: "/2",
    label: "page2",
    element: <Page />,
  },
  {
    id: 3,
    path: "/3",
    label: "page3",
    element: <Page />,
  },
  {
    id: 4,
    path: "/4",
    label: "page4",
    element: <Page />,
  },
];

export const routers: RemixRouter = createBrowserRouter(
  routerData.map((router) => {
    return {
      path: router.path,
      element: <GeneralLayout>{router.element}</GeneralLayout>,
      errorElement: <NotFound />,
    };
  }),
);
