'use client'
import {useState} from 'react'
import { db } from '../firebase';
import {addDoc, collection} from 'firebase/firestore';

export default function CreateTodo() {

    const [todo, setTodo] = useState({
        title: '',
        detail: ''
    });

    async function handleSubmit() {
        const docRef = await addDoc(collection(db, 'todos'), todo);
        setTodo({title: '', detail: ''});
    }

  return (
    <>
        <form>
            <label>Title</label>
            <input type="text" onChange={(event) => setTodo({...todo, title: event.target.value})} value={todo.title}/>
            <textarea onChange={(event) => setTodo({...todo, detail: event.target.value})} value={todo.detail}></textarea>
        </form>
        <button onClick={handleSubmit}>Add Todo</button>
        <p>{JSON.stringify(todo)}</p>
    </>
  )
}
