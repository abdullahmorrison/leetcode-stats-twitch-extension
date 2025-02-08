import React from "react"
import Panel from "./panel/Panel"
import * as styles from "./app.module.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export default function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.app}>
        <Panel/>
      </div>
    </QueryClientProvider>
  )
}
