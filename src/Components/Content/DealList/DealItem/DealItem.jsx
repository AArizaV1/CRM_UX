import styles from './DealItem.module.css'

function DealItem({ data }) {
  return (
    <div className={ styles.wrapper }>
        <p className={styles.title}>{data.name}</p>
        <p>Creation date: {data.date}</p>
        <p>Last update: {data.lastUpdate}</p>
        <p>Contact: {data.contact.name} {data.contact.surname}</p>
    </div>
  )
}
export default DealItem