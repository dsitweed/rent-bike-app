import { App as AntdApp, ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { theme } from "./assets/theme";

function App() {
  return (
    <ConfigProvider theme={theme}>
      <AntdApp>
        <RouterProvider router={router} />
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
