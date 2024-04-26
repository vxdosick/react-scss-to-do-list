import styles from "./Add.module.scss"
import React from "react"
import List from "../List/List"

export default function Add() {
    const [addTask, setAddTask] = React.useState([
        
    ])
    const [titleText, setTitle] = React.useState('')
    const [infoText, setInfo] = React.useState('')

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }
    const onChangeInfo = (event) => {
        setInfo(event.target.value)
    }
    const onAdd = () => {
        if(titleText !== '') {
            setAddTask(addTask => [...addTask, {title: titleText, info: infoText, completed: false}])
            setTitle('')
            setInfo('')
        } else {
            alert("Enter task's title please")
        }
    }
    const onDelete = (index) => {
        setAddTask(elem => elem.filter((_, i) => i!==index))
    }
    const onComplete = (index) => {
        setAddTask(item => item.map((task, i) => {
            if (i === index) {
                return {...task, completed: !task.completed}
            }
            return task
        }))
    }
    return (
        <section className={styles.add}>
            <div className={styles.add__container}>
                <div className={styles.add__buttons}>
                    <div className={styles.add__input}>
                        <h2>Title:</h2>
                        <input maxLength={100} value={titleText} onChange={onChangeTitle} type="text" />
                    </div>
                    <button onClick={onAdd}>Add +</button>
                </div>
                <div className={styles.add__info}>
                    <h2>Task Information</h2>
                    <textarea value={infoText} onChange={onChangeInfo} placeholder="Enter task information..."></textarea>
                </div>
            </div>
            <List list = {addTask} onComplete={onComplete} onDelete={onDelete} />
        </section>
    )
}