import Head from 'next/head';
import Link from 'next/link';

import styles from './dash.module.scss';

export default function Dash() {
  return (
    <div>
      <Head>
        <title>Ccodar | Dashboard</title>
      </Head>

      <header className={styles.hed}>
          <img width='220px' height='65px' src="logo.svg" alt="logo"/>
          <ul>
            <li><Link href='/'>
              <a >HO<span>M</span>E</a>
              </Link></li>
            <li><Link href='#'>
              <a>EX<span>P</span>LORAR</a>
              </Link></li>
            <li><Link href="#">
              <a>BI<span>B</span>LIOTECA</a>
              </Link></li>
          </ul>
        <Link href='https://github.com/CleytonJrB'><div className={styles.logo}></div></Link>
      </header>
      <section className={styles.dashb}>
        <div>
          <h1>alou</h1>
        </div>
        <div>
         <h1></h1>
        </div>
        <div>
         <h1></h1>
        </div>
        <div>
         <h1></h1>
        </div>
        <div>
         <h1></h1>
        </div>
        <div>
         <h1></h1>
        </div>
      </section>
     </div>
  );
}