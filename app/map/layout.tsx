import React, { ReactNode } from "react";
import Layout from "@/components/commonComponents/layout";

type MapLayoutProps = {
  children: ReactNode;
};

const Map = ({ children }: MapLayoutProps) => {
  return <Layout>{children}</Layout>;
};

export default Map;
