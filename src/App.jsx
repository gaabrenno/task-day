import { useEffect, useState } from "react";
import FormTask from "./components/FormTask";
import Tasks from "./components/Tasks";
import { v4 as uuidv4 } from 'uuid';

function App(){
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function onAddTaskClick(title, description){
    const newTask = {
      id: uuidv4(),
      title: title,
      description: description,
      isCompleted: false,
    }
    setTasks([...tasks, newTask]);
  }

  function onTaskClick(task){
    setTasks(tasks.map((t) => t.id === task.id ? {...t, isCompleted: !t.isCompleted} : t));
  }

  function onDeleteTaskClick(taskId){
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return(
    <div className="relative min-h-screen min-w-screen bg-zinc-900 flex flex-col justify-center items-center p-6">
      <div className="w-full max-w-xl bg-[#232136] rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-[#00FFF7] mb-2 text-center drop-shadow-[0_0_10px_#00FFF7]">Tasks day</h1>
        <FormTask onAddTaskClick={onAddTaskClick}/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
      </div>
      <footer className="fixed bottom-0 left-0 w-full bg-[#232136] text-zinc-400 text-center py-2 text-sm shadow-inner z-50">
        © {new Date().getFullYear()} Task Day. Todos os direitos reservados.<br/>
        Desenvolvido por <a href="https://github.com/gaabrenno/task-day.git" target="_blank" rel="noopener noreferrer" className="text-[#00FFF7] hover:text-[#00FFF7]/80 transition-colors drop-shadow-[0_0_10px_#00FFF7]">ARDA Innovations</a>
      </footer>
    </div>
  );
}

export default App;