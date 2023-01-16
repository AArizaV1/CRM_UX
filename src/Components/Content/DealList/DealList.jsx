import DealItem from './DealItem/DealItem'

import styles from './DealList.module.css'

function DealList({ title, data }) {
  const dealsData = data
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>{title}</div>
      <div className={styles.content}>
        {dealsData &&
          dealsData.map((deal) => {
            return <DealItem data={ deal }/>
          })
        }
      </div>
    </div>
  )
}
export default DealList