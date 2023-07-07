import { Layout } from "antd";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function AdminLayout() {
  return (
    <Layout className="p-4" style={{ height: '100vh', background: 'white'}}>
      <Header />
      <Layout.Content className="flex overflow-auto">
        <div className="flex-1 h-full">
          <Outlet />
        </div>
      </Layout.Content>
      <Footer />
    </Layout>
  );
}