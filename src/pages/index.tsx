import Head from 'next/head';
import styles from './home.module.scss';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Head>
        <title>SmartHome | Login</title>
      </Head>
      <div className={styles.leftl}>
            <header>
                <img src="smarthomes.svg" alt="Smart Home"/>
            </header>
      </div>

      <div className={styles.lg}>
        <form>
          <h1>US<span>U</span>ARIO</h1>
          <input type="text" name='Login' id='name'  />
          <br/>
          <h1>SE<span>N</span>HA</h1>
          <input type="password" name="Senha" id="pass"  />
          <Link href='/button'>
          <button type='submit'>EN<span>T</span>RAR</button>
          </Link>
        </form>
      </div>
    </>
  )
}
