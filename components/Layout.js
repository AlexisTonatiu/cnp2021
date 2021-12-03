import styles from '../styles/Home.module.css'

const Layout = ({children}) => {
    return (
        <div>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}

export default Layout