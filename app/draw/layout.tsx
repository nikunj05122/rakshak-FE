import React, { ReactNode } from "react";
import Layout from "@/components/commonComponents/layout";

type DrawLayoutProps = {
    children: ReactNode;
};

const DrawLayout = ({ children }: DrawLayoutProps) => {
    return <Layout>{children}</Layout>;
};

export default DrawLayout;
