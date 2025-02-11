import { useState } from 'react'
import Tasks from './components/Task'
import AddTask from './components/AddTask'

function App() {
  return (
    <div>
      <h1>Gerenciador de tarefas</h1>
      <Tasks/>
      <AddTask/>
    </div>
  )
}

export default App