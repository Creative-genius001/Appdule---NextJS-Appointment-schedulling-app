"use client";

import { store } from "./store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return(
    <Provider store={store}>
        {children}
    </Provider>
  )   
}
