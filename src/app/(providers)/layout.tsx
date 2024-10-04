import { TanstackQueryProvider } from "../../../tanstack/tanstackclient";
import React, { PropsWithChildren } from "react";

function ProvidersLayout({ children }: PropsWithChildren) {
  return <TanstackQueryProvider>{children}</TanstackQueryProvider>;
}

export default ProvidersLayout;
