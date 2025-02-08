import React from "react"
import * as styles from "./panel.module.css"
import DonutChart from '../donutChart/DonutChart';

export default function Panel() {
  const easy = 200
  const medium = 230
  const hard = 38
  const total = 3445

  return (
    <div className={styles.panel}>
      <header>
        Abdullah's Leetcode Stats
      </header>

      <DonutChart
        className="test"
        data={[
          { label: 'Easy', value: easy, },
          { label: 'Medium', value: medium, },
          { label: 'Hard', value: hard, },
          { label: 'Incomplete', value: total-(easy+medium+hard), isEmpty: true, },
        ]}
        colors={["#00B8A3", "#E8B01F", "#FD365E"]}
        emptyColor="#4A4A4A"
        strokeColor=""
        legend={false}
        formatValues={(values, total)=>`${(values / total * 100).toFixed(2)}%`}
        innerRadius={0.815}
        width={200}
        height={200}
      />

      <div className={styles.difficultyBreakdown}>
        <div>
          <p className={styles.easy}>Easy</p>
          <p>{easy}<span>/300</span></p>
        </div>
        <div>
          <p className={styles.medium}>Medium</p>
          <p>{medium}<span>/300</span></p>
        </div>
        <div>
          <p className={styles.hard}>Hard</p>
          <p>{hard}<span>/300</span></p>
        </div>
      </div>
    </div>
  )
}
