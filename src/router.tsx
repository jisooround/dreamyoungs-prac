import { createBrowserRouter } from "react-router-dom";
import { Router as RemixRouter } from "@remix-run/router/dist/router";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import NotFound from "./pages/NotFound";
import GeneralLayout from "./components/GeneralLayout";
// import App from "./App";

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
    element: <Page1 />,
  },
  {
    id: 2,
    path: "/2",
    label: "page2",
    element: <Page2 />,
  },
  {
    id: 3,
    path: "/",
    label: "page3",
    element: <Page3 />,
  },
  {
    id: 4,
    path: "/",
    label: "page4",
    element: <Page4 />,
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
