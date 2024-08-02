import { useEffect, useRef, useState } from 'react';
import './App.css'
import Form from './component/Form'
import ToDoList from './component/ToDoList'

function App() {
  const newTask = useRef('');
  const STORAGE = 'To-Do-List App'

  const [tasks, setTask] = useState(() => {
    return JSON.parse(localStorage.getItem(STORAGE)) || []
  });
  useEffect(() => {
    localStorage.setItem(STORAGE, JSON.stringify(tasks));
  }, [tasks])



  function addTask(event) {


    event.preventDefault();

    if (newTask.current.value == '') {
      alert(`Silahkan masukkan sesuatu`);
      return false
    }

    function setId() {
      if (tasks == '') {
        return 1;
      } else {
        return tasks[0].id + 1
      }
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
        taskItem[index] = { ...item, completed: !item.completed }
      } else {
        taskItem[index] = item
      }
    })
    setTask(taskItem);
    console.log(tasks);
  }

  function hapusId(id) {
    if (window.confirm(`Data Akan Dengan Id ${id} akan di hapus, Yakin?`)) {
      setTask(tasks.filter((item) => item.id != id))
    }
  }
  return (
    <>
      <div className="container">
        <Form addTask={addTask} newTask={newTask} />
        <ToDoList tasks={tasks} setCompleted={setCompleted} hapusId={hapusId} />
      </div>
    </>
  )
}

export default App