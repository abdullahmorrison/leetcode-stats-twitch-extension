import React from "react"
import * as styles from "./panel.module.css"

export default function Panel() {
  return (
    <div className={styles.panel}>
      <header>
        Abdullah's Leetcode Stats
      </header>

      <div className={styles.donutChart}>
        All
        <span className={styles.totalSolved}>489</span>
        <hr/>
        3445
      </div>

      <div className={styles.difficultyBreakdown}>
        <div>
          <p className={styles.easy}>Easy</p>
          <p>200<span>/300</span></p>
        </div>
        <div>
          <p className={styles.medium}>Medium</p>
          <p>200<span>/300</span></p>
        </div>
        <div>
          <p className={styles.hard}>Hard</p>
          <p>200<span>/300</span></p>
        </div>
      </div>
    </div>
  )
}
