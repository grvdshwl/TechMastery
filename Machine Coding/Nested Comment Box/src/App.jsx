import React, { useContext } from 'react'

import './App.css'
import CommentsBox from '../components/comments'
import { AppContext } from '../context';

function App() {
  const {  comments } = useContext(AppContext);

  return (
    <div className='app'>
    <h1>Comments Box</h1>
     <CommentsBox comments={comments}/>
     
    </div>
  )
}

export default App
