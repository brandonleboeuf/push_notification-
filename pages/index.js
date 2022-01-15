import {Toast} from '../components/Toast'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          normal content
        </div>
      </main>
      <Toast />
    </div>
  )
}
