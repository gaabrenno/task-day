import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPages(){
    const [searchParams] = useSearchParams();
    const title = searchParams.get('title');
    const description = searchParams.get('description');
    const navigate = useNavigate();

    return (
        <div className="min-h-screen min-w-screen bg-zinc-900 flex justify-center items-center p-6">
            <div className="w-full max-w-xl bg-[#232136] rounded-lg shadow-lg p-8">
                <div >
                    <button
                        className="bg-transparent border-none p-0 m-0 shadow-none outline-none focus:outline-none active:outline-none text-[#00FFF7] hover:text-[#00FFF7]/80 transition-colors"
                        style={{ background: "none", boxShadow: "none" }}
                        onClick={() => navigate(-1)}
                    >
                        <ChevronLeftIcon size={32} />
                    </button>
                <h1 className="text-4xl font-bold text-[#00FFF7] mb-2 text-center drop-shadow-[0_0_10px_#00FFF7]">Detalhes da tarefa</h1>
                <h2 className="text-2xl font-bold text-[#FFD600] mb-2 text-center drop-shadow-[0_0_10px_#FFD600]">{title}</h2>
                <p className="text-zinc-400 text-lg text-center leading-relaxed">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default TaskPages;