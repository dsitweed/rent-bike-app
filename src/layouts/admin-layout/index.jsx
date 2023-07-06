import { Layout } from "antd";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <Layout style={{ height: '100vh', background: 'white'}}>
      <Header />
      <Layout.Content className="flex overflow-auto">
        <div className="h-full flex-1">
          <Outlet />
        </div>
      </Layout.Content>
    </Layout>
  );
}