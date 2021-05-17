//import Image from 'next/image'
import styles from './home.module.scss'

export default function Home() {
  return (
    <div className={styles.homepage}>
    <section className={styles.lg}>
    <form>
          <h1>Usuario</h1>
          <input type="text" name='Login' id='name' required/>
          <h1>Senha</h1>
          <input type="password" name="Senha" id="pass" required/>

          <button type='submit'>Entrar</button>
          
    </form>
    </section>
    </div>
  )
}
