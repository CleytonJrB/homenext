import Link from 'next/link';
import Head from 'next/head'

import styles from './button.module.scss';

export default function Butons(){
    return(
    <div className={styles.but1}>
        <Head>
            <title>SmartHome | Button</title>
        </Head>
        <h1>BU<span>T</span>AO</h1>
        <Link href='/'>
            <button type="button">VO<span>L</span>TAR</button>
        </Link>   
    </div>   
    );
}