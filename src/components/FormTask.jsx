import { useState } from "react";

function FormTask({onAddTaskClick}){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState('');
    return(
        <div className="mb-6 space-y-3">
            <input 
                type="text" 
                id="title" 
                placeholder="Adicione uma nova tarefa" 
                className="w-full p-2 rounded-md bg-zinc-800 text-zinc-100 border-2 border-zinc-700 focus:outline-none focus:border-[#00FFF7] focus:shadow-[0_0_10px_#00FFF7] mb-2" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />

            <input 
                type="text" 
                id="description" 
                placeholder="Adicione uma descrição" 
                className="w-full p-2 rounded-md bg-zinc-800 text-zinc-100 border-2 border-zinc-700 focus:outline-none focus:border-[#00FFF7] focus:shadow-[0_0_10px_#00FFF7] mb-2" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
                required
            />

            <input
                type="time"
                id="time"
                placeholder="Horário da tarefa"
                className="w-full p-2 rounded-md bg-zinc-800 text-zinc-100 border-2 border-zinc-700 focus:outline-none focus:border-[#00FFF7] focus:shadow-[0_0_10px_#00FFF7] mb-2"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
            />

            <button 
                type="submit" 
                className="w-full p-2 rounded-md bg-[#00FFF7] text-[#00FFF7] font-bold border-2 border-[#00FFF7] hover:bg-[#00FFF7] hover:shadow-[0_0_15px_#00FFF7] transition-all duration-300" 
                onClick={() => {
                    onAddTaskClick(title, description, time);
                    setTitle('');
                    setDescription('');
                    setTime('');
                }}
                disabled={!title.trim() || !description.trim() || !time.trim()}
            >
                Adicionar
            </button>
        </div>
    )
}

export default FormTask;