import Link from "next/link"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className="container">
      <main className="main">
        <div className={styles.grid}>
          <Link href="/register">
            <div className={styles.card}>
              <h3>Register as Seller &rarr;</h3>
              <p>Register yourself as a service provider/seller</p>
            </div>
          </Link>

          <Link href="/pay-out">
            <div className={styles.card}>
              <h3>Pay as a Customer &rarr;</h3>
              <p>Pay as a customer to the service provider</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}
