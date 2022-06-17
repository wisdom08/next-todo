import fs, {writeFileSync} from "fs";
import {TodoType} from "../../types/todo";

const getList = () => {
    const todoBuffer = fs.readFileSync("data/todos.json");
    const todoString = todoBuffer.toString();
    if(!todoString) return [];
    const todos: TodoType[] = JSON.parse(todoString);
    return todos;
}

const exist = ({id}: { id: number }) => {
    const todos = getList();
    return todos.some((todo) => todo.id === id);
};

const write = async (todos: TodoType[]) => {
    writeFileSync("data/todos.json", JSON.stringify(todos));
}


export default { getList, exist, write }