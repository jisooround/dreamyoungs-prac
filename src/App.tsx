import { RouterProvider } from "react-router-dom";
import { routers } from "./router";
import GlobalStyles from "./global/globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
