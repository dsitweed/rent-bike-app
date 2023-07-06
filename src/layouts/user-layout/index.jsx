import { Layout, Typography } from "antd";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandTwitter,
} from "@tabler/icons-react";

export default function UserLayout() {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header />
      <Layout.Content className="flex overflow-auto">
        <div className="h-full flex-1 px-2">
          <Outlet />
        </div>
      </Layout.Content>
      <Layout.Footer className="flex flex-row justify-between py-4 bg-primary text-secondary">
        <p className="font-bold">バイク借り</p>
        <div className="flex gap-2">
          <IconBrandFacebook />
          <IconBrandInstagram />
          <IconBrandTwitter />
          <IconBrandTiktok />
        </div>
      </Layout.Footer>
    </Layout>
  );
}
