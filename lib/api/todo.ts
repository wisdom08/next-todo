import axios from "./index";
import {TodoType} from "../../types/todo";

export const getDodosAPI = () => axios.get<TodoType[]>("/api/todos")

export const checkTodoAPI = (id: number) => axios.patch(`api/todos/${id}`);