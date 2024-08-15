import React, { ReactNode } from "react";
import Header from "@/components/commonComponents/header";

type DashboardLayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
