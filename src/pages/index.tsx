import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ccodar | Login</title>
      </Head>
      <div className={styles.leftl}>
        <Image
          src="/logo.svg"
          alt="Logo"
          width={400}
          height={400}
        />
      </div>

      <div className={styles.lg}>
        <div className={styles.formst}>
          <form>
            <label htmlFor="usuario">Us<span>u</span>ario<span>:</span></label>
            <input type="text" name="Login" id="name" />
            <label htmlFor="senha">Se<span>n</span>ha<span>:</span><a href="#">Esqueceu <span>a</span> senha<span>?</span></a></label>
            <input type="password" name="Senha" id="pass" />
            <Link href='/dashboard'>
              <button type='submit'>EN<span>T</span>RAR</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}