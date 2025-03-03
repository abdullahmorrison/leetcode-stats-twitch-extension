import React from "react"
import * as styles from "./panel.module.css"
import DonutChart from '../donutChart/DonutChart'
import { useQuery } from "@tanstack/react-query"
import Error from "./Error/Error"
import Skeleton from "./Skeleton/Skeleton"

export default function Panel() {
  const {data, isError, error, isLoading }= useQuery({
    queryKey: ['leetcode-stats'],
    queryFn: async ()=>{
      const url = "https://alfa-leetcode-api.onrender.com"
      const solved = await fetch(`${url}/userProfile/abdullahmorrison`)
        .then(res=>res.json())
      const badges = await fetch(`${url}/abdullahmorrison/badges`)
        .then(res=>res.json())

      let activeBadgeUrl = badges.activeBadge.icon
      if(!activeBadgeUrl.includes('https'))
        activeBadgeUrl = `https://leetcode.com${activeBadgeUrl}`

      return { ...solved, activeBadge: activeBadgeUrl }
    }
  })

  if(isError){
    console.group('Abdullah LeetCode Stats Twitch Extension Error: ')
      console.error(error.name)
      console.error(error.message)
    console.groupEnd()
    return <Error/>
  }

  if(isLoading) return <Skeleton/>

  return (
    <div className={styles.panel}>
      <header>
        <img src={data.activeBadge} alt="leetcode badge" width={40}/>
        <p>Abdullah's LeetCode Stats</p>
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
