"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
function ReactQueryProvider({ children }: React.PropsWithChildren) {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      {children} <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;
