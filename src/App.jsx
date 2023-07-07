import { App as AntdApp, ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { theme } from "./assets/theme";
import { AuthProvider } from "./context/auth";

function App() {
  return (
    <ConfigProvider theme={theme}>
      <AntdApp>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
