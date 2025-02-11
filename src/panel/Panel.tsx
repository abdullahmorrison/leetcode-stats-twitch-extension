import React from "react"
import * as styles from "./panel.module.css"
import DonutChart from '../donutChart/DonutChart';
import { useQuery } from "@tanstack/react-query";

export default function Panel() {
  const {data, isError, error, isLoading }= useQuery({
    queryKey: ['leetcode-stats'],
    queryFn: async ()=>{
      const url = "https://alfa-leetcode-api.onrender.com"
      const solved = await fetch(`${url}/userProfile/abdullahmorrison`)
      const badges = await fetch(`${url}/abdullahmorrison/badges`)
      return {...(await solved.json()), ...(await badges.json())}
    }
  })

  if(isError){
    console.log(error.message)
    return "Error: failed to fetch leetcode stats.."
  }

  if(isLoading) return "Loading..."

  return (
    <div className={styles.panel}>
      <header>
        <img src={data.badges[0].icon} alt="leetcode badge" width={40}/>
        <p>Abdullah's Leetcode Stats</p>
      </header>

      <DonutChart
        className="test"
        data={[
          { label: 'Easy', value: data.easySolved, },
          { label: 'Medium', value: data.mediumSolved, },
          { label: 'Hard', value: data.hardSolved, },
          { label: 'Incomplete', value: data.totalQuestions-data.totalSolved, isEmpty: true, },
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
          <p>{data.easySolved} <span>/{data.totalEasy}</span></p>
        </div>
        <div>
          <p className={styles.medium}>Medium</p>
          <p>{data.mediumSolved} <span>/{data.totalMedium}</span></p>
        </div>
        <div>
          <p className={styles.hard}>Hard</p>
          <p>{data.hardSolved} <span>/{data.totalHard}</span></p>
        </div>
      </div>
    </div>
  )
}
