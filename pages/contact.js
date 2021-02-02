import { Navbar } from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Contact() {
  return (

    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1>Contact</h1>
    </div>
  );
}