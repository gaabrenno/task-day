import { CheckCheckIcon, ChevronRightIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import dayOffSvg from "../assets/day-off.svg";

function Tasks({tasks, onTaskClick, onDeleteTaskClick}){
    const navigate = useNavigate();

    function onTaskPageClick(task){
        const queryParams = new URLSearchParams();
        queryParams.set('title', task.title);
        queryParams.set('description', task.description);
        navigate(`/tasks?${queryParams.toString()}`);
    }

    return(
        <div>
            {tasks.length === 0 && (
                <div className="flex flex-col items-center justify-center py-8">
                    <img 
                        src={dayOffSvg} 
                        alt="Nenhuma tarefa encontrada" 
                        className="w-64 h-64 md:w-80 md:h-80 opacity-60"
                    />
                    <p className="text-zinc-400 text-center text-lg mt-4">
                        Nenhuma tarefa encontrada, day off!
                    </p>
                </div>
            )}
            <ul className="space-y-3">
                {tasks.map((task) => (
                    <li key={task.id} className={`bg-zinc-800 text-zinc-100 p-3 rounded-md border-l-4 shadow-[0_0_10px_${task.isCompleted ? '#40ff0022' : '#FFD60022'}] flex justify-between items-center gap-2 ${task.isCompleted ? 'border-[#40ff00]' : 'border-[#FFD600]'}`}>
                        <button 
                            onClick={() => onTaskClick(task)} 
                            className={`font-bold w-full text-left text-lg drop-shadow-[0_0_6px_${task.isCompleted ? '#40ff00' : '#FFD600'}] ${task.isCompleted ? 'line-through text-[#40ff00]' : 'text-[#FFD600]'}`}>
                                {task.isCompleted ? (
                                    <div className="flex items-center gap-2">
                                        <CheckCheckIcon />
                                        <span className="line-through">{task.title}</span>
                                    </div>
                                ) : (
                                    task.title
                                )}
                            </button>
                        <button 
                            onClick={() => onTaskPageClick(task)}
                            className="font-bold text-lg text-[#FFD600] drop-shadow-[0_0_6px_#FFD600]">
                                <ChevronRightIcon />
                        </button>
                        <button 
                            onClick={() => onDeleteTaskClick(task.id)}
                            className="font-bold text-lg text-[#ff5900] drop-shadow-[0_0_6px_#ff5900]">
                                <Trash2Icon />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tasks;