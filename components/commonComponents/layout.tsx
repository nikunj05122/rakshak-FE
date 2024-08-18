import React, { ReactNode } from "react";
import Header from "@/components/commonComponents/header";

type DashboardLayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: DashboardLayoutProps) => {
    return <Header>{children}</Header>;
};

export default Layout;
