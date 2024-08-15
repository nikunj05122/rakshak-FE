import React, { ReactNode } from "react";
import Layout from "@/components/commonComponents/layout";

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return <Layout>{children}</Layout>;
};

export default DashboardLayout;
