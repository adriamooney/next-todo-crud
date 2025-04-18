import React from 'react'
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.js'

export default async function Todo({params}) {

  const {id} = await params;
  const docSnap = await getDoc(doc(db, 'todos', id));
  const todo = docSnap.data();
 
  return (
    <div>
        <h1>Todo tile: {todo.title}</h1>
        <h3>Detail: {todo.detail}</h3>
    </div>
  )
}