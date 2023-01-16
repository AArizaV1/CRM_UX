import { useEffect, useState } from 'react'
import image from '../img/profile.png'
import DealList from './DealList/DealList'
import styles from './Content.module.css'


function Content() {
  const [dealsData, setDealsData] = useState()

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/deal')
      .then((response) => response.json())
      .then((data) => setDealsData(data))
  }, [])

  const filterByStatus = (data, status) => {
    return data?.filter((element) => element.dealStatus === status)
  }

  return (
    <div className={styles.content}>
      <div className={styles.dealListWrapper}>
        <DealList title="LEAD" data={filterByStatus(dealsData, "LEAD")}/>
        <DealList title="NEGOTIATION" data={filterByStatus(dealsData, "NEGOTIATION")}/>
        <DealList title="CLOSED" />
        <DealList title="LOST" />
      </div>
        <div className={styles.dealSummary} style={{width: "30%"}}>
          <h2>Deal Summary</h2>
          <h1>Contact</h1>
          <div className={styles.contact}>
            <img src={image} alt="profile icon" width="100"></img>
            <ul>
              <li>Name</li>
              <li>Last name</li>
              <li>Phone Number</li>
              <li>email:</li>
            </ul>
          </div>
          <div className="company">
            <h1>Company</h1>
            <ul>
              <li>Name:</li>
              <li>Web:</li>
              <li>Address:</li>
              <li>Sector:</li>
            </ul>
          </div>
          <div className="activityTitle">
            <h1>Activity</h1>
            <div className={styles.cards}>
              <p><b>Email</b> - Fulanito Pérez</p>
              <p><b>10/12/2022 - 2:32om</b></p>
              <p><b>Subject:</b> I liked what you showed us Dear Miguel. We have been reviewing the mock-ups you shared with us yesterday. We are generally qui...</p>
            </div>
         
            <div className={styles.cards}>
              <p><b>Call</b> - Fulanito Pérez</p>
              <p><b>10/12/2022 - 2:32om</b></p>
              <p><b>Notes:</b> I called Fulanito to ask about minor details for the mock-up and agreed to send somenthing today.</p>
            </div>
            </div>
            <div className={styles.editBtn}>
            <button> EDIT DEAL DETAILS</button>
            </div>
        </div>
    </div>
  )
}
export default Content