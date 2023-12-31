import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Facebak login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />

      </Head>
      <main className={styles.main}>
        <div className={styles.formContainer}>
          <h1 className={styles.logo}>Facebak login</h1>
          <p className={styles.p}>Login here</p>
          <form action="">
            <div>
              <label htmlFor="username" className={styles.label}>Username</label>
              <input type="text" name="username" id="username" placeholder='Annah Prince' className={styles.input} />
            </div>
            <div>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input type="password" name="password" id="password" className={styles.input} />
            </div>
            <div><button className={styles.loginBtn}>Login</button></div>
          </form>
          <p><a href="" className={styles.linkStyle}>Forgot password?</a></p>
        </div>

      </main>
    </>
  )
}
