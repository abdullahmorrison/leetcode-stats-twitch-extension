import React from "react"
import * as styles from  "./skeleton.module.css"

export default function Skeleton() {
  return (
    <div className={styles.panel}>
      <header>
        <div className={`${styles.badge} ${styles.skeleton}`}></div>
        <p className={`${styles.title} ${styles.skeleton}`}></p>
      </header>

      <div className={`${styles.donutChart} ${styles.skeleton}`}></div>

      <div className={styles.difficultyBreakdown}>
        <div className={styles.skeleton}></div>
        <div className={styles.skeleton}></div>
        <div className={styles.skeleton}></div>
      </div>
    </div>
  )
}
