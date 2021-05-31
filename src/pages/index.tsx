import Head from 'next/head';
import Link from 'next/link';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>SmartHome | Login</title>
      </Head>
      <div className={styles.leftl}>
        <section>
          <p>SEJA <span>BEM</span> VINDO(A)!</p>
          <h5>Vamos <span>comecar</span> a <span>C</span>odar.</h5>
        </section>
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