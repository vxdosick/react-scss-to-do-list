import styles from "./Header.module.scss"

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <h1>To Do List</h1>
            </div>
        </header>
    )
}