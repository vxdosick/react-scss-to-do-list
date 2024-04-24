import styles from "./List.module.scss"

export default function List(props) {
    return (
        <section className={styles.list}>
            {props.list.map((obj, index) => {
                return (
                    <div key={index} className={styles.list__elem}>
                <div className={styles.list__up}>
                    {obj.completed ? <h2 className={styles.list__complete}>{obj.title}</h2> : <h2>{obj.title}</h2>}
                    <div className={styles.list__button}>
                        <button onClick={() => props.onComplete(index)}>&#10004;</button>
                        <button onClick={() => props.onDelete(index)}>Delete</button>
                    </div>
                </div>
                <p>{obj.info}</p>
            </div>
                )
            })}
        </section>
    )
}