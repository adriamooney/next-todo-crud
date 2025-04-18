'use client'
import {useState, useEffect} from 'react'
import { onSnapshot, collection } from 'firebase/firestore'
import { db } from '../firebase';
import Link from 'next/link';
export default function TodoList() {

const [todos, setTodos] = useState([]);

useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'todos'), (snapshot) => {
        console.log(snapshot);

        setTodos(snapshot.docs.map(doc => {
            return {
                id: doc.id,
                title: doc.data().title,
                detail: doc.data().detail
            }
        }) )
    })

    return unsubscribe;  // onSnapshot is a listenter. returning it here will make it so it's not always running and taking up resources by stop listening.

}, [])

  return (
    <div><h1>To Do List</h1>
        <ul className="todoList">
            {todos.map((todo) => {
                return (
                    <Link href={`/${todo.id}`} key={todo.id}>
                        <li className="listItem" >{todo.title}</li>
                    </Link>
                )
            })}
        </ul>

    </div>
  )
}
