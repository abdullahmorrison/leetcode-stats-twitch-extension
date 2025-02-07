import React from "react"
import Panel from "./panel/Panel"
import * as styles from "./app.module.css"

export default function App() {
  return (
    <div className={styles.app}>
      <Panel/>
    </div>
  )
}
