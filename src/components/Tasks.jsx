import { CheckCheckIcon, ChevronRightIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import dayOffSvg from "../assets/day-off.svg";
import { useEffect, useState } from "react";

function Tasks({tasks, onTaskClick, onDeleteTaskClick}){
    const navigate = useNavigate();
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const hh = String(now.getHours()).padStart(2, '0');
            const mm = String(now.getMinutes()).padStart(2, '0');
            setCurrentTime(`${hh}:${mm}`);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    function onTaskPageClick(task){
        const queryParams = new URLSearchParams();
        queryParams.set('title', task.title);
        queryParams.set('description', task.description);
        navigate(`/tasks?${queryParams.toString()}`);
    }

    function isTaskActive(task) {
        if (task.isCompleted || !task.time) return false;
        // Compara se o horário atual é igual ou superior ao da task
        return currentTime >= task.time;
    }

    return(
        <>
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
                {tasks
                    .slice()
                    .sort((a, b) => {
                        if (!a.time) return 1;
                        if (!b.time) return -1;
                        return a.time.localeCompare(b.time);
                    })
                    .map((task) => (
                        <li key={task.id} className={`bg-zinc-800 text-zinc-100 p-3 rounded-md border-l-4 flex justify-between items-center gap-2 ${task.isCompleted ? 'border-[#40ff00] shadow-[0_0_10px_#40ff0022]' : 'border-[#FFD600]'}`}>
                            <button 
                                onClick={() => onTaskClick(task)} 
                                className={`font-bold w-full text-left text-lg ${task.isCompleted ? 'text-[#40ff00] line-through box-shadow-green' : isTaskActive(task) ? 'text-[#ff5900] shadow-orange' : 'text-[#FFD600] shadow-yellow'} ${task.isCompleted ? '' : ''} `}>
                                    {task.isCompleted ? (
                                        <div className="flex items-center gap-2">
                                            <CheckCheckIcon />
                                            <span className="line-through">{task.time ? `${task.time} - ` : ''}{task.title}</span>
                                        </div>
                                    ) : (
                                        <span>{task.time ? `${task.time} - ` : ''}{task.title}</span>
                                    )}
                                </button>
                            <button 
                                onClick={() => onTaskPageClick(task)}
                                className={`font-bold text-lg ${task.isCompleted ? 'text-[#40ff00] box-shadow-green' : isTaskActive(task) ? 'text-[#ff5900] shadow-orange' : 'text-[#FFD600] shadow-yellow'} ${task.isCompleted ? '' : ''} `}>
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
        {/* Classe para box-shadow verde */}
        <style>{`.box-shadow-green { box-shadow: 0 0 10px #40ff00, 0 0 20px #40ff00; }
.shadow-yellow { box-shadow: 0 0 6px #FFD600; }
.shadow-orange { box-shadow: 0 0 6px #ff5900; }`}</style>
        </>
    )
}

export default Tasks;