import { useRef, useState } from 'react';
import './App.css'
import Form from './component/Form'
import ToDoList from './component/ToDoList'

function App() {
  const newTask = useRef('');
  const [tasks, setTask] = useState([]);



  function addTask(event) {
    function setId() {
      const jumlahTasks = tasks.length;
      return 1 + jumlahTasks
    }
    event.preventDefault();

    if (newTask.current.value == '') {
      alert(`Silahkan masukkan sesuatu`);
      return false
    }

    const data = {
      id: setId(),
      task: newTask.current.value,
      completed: false
    }
    newTask.current.value = '';
    setTask([...tasks, data]);
  }

  function setCompleted(id) {
    let taskItem = []
    tasks.map((item, index) => {
      if (item.id == id) {
        if (item.completed) {
          taskItem[index] = item
        } else {
          taskItem[index] = { ...item, completed: !item.completed }
        }
      } else {
        taskItem[index] = item
      }
    })
    setTask(taskItem);
    console.log(tasks);
  }

  return (
    <>
      <Form addTask={addTask} newTask={newTask} />
      <ToDoList tasks={tasks} setCompleted={setCompleted} />
    </>
  )
}

export default App