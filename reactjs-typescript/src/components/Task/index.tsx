import {useReducer, useState} from "react";

type Task = {
    id: number;
    texto: string;
}

const initialState: Task[] = [];

type Action = | { type: "add"; texto: string }
const reducer = (state: Task[], action: Action) => {
    switch (action.type) {
        case "add":
            return [...state, { id: Date.now(), texto: action.texto }];
        default:
            return state;
    }
}

export const Task = () => {
    const [input, setInput] = useState("");
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return(
        <div>
            <h1>Tarefas: </h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                onClick={() => {
                    dispatch({ type: "add", texto: input });
                    setInput("");
                }}
            >
                Adicionar
            </button>
            <ul>
                {state.map((task) => (
                    <li key={task.id}>{task.texto}</li>
                ))}
            </ul>
        </div>
    );
}
