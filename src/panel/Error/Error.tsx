import React from "react"
import * as styles from "./error.module.css"

export default function Error() {
  return (
    <div className={styles.error}>
      <h3>Failed to Load Leetcode Stats</h3>
      <p>An unexpected error occurred while trying to load Abdullah's leetcode stats.</p>
    </div>
  )
}
