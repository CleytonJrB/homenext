import styles from './styles.module.scss';

export function Header(){
  
    return(
        <header className={styles.headercont}>
            <img src="/smarthomes.png" alt="Smart Home" />
        </header>
    )
}