import React, { ReactNode } from "react";
import Layout from "@/components/commonComponents/layout";

type UsersLayoutProps = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: UsersLayoutProps) => {
  return <Layout>{children}</Layout>;
};

export default DashboardLayout;
