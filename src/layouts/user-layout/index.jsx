import { Layout } from "antd";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <Layout style={{ height: '100vh'}}>
      <Header />
      <Layout.Content className="flex overflow-auto">
        <div className="h-full flex-1">
          <Outlet />
        </div>
      </Layout.Content>
    </Layout>
  );
}