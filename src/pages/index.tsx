import Head from 'next/head';
import styles from './home.module.scss';


export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Login</title>
      </Head>
      <div className={styles.leftl}>
            <header>
                <img src="smarthomes.svg" alt="Smart Home"/>
            </header>
      </div>

      <div className={styles.lg}>
        <form>
          <h1>US<span>U</span>ARIO</h1>
          <input type="text" name='Login' id='name' required />
          <br/>
          <h1>SE<span>N</span>HA</h1>
          <input type="password" name="Senha" id="pass" required />

          <button type='submit'>EN<span>T</span>RAR</button>

        </form>
      </div>
    </>
  )
}
