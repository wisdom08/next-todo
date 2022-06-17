import {NextPage} from 'next';
import TodoList from "../components/TodoList";
import {TodoType} from "../types/todo";

const todos: TodoType[] = [
    {id:1, text: '장보기', color: 'red', checked: false},
    {id:2, text: '운동', color: 'orange', checked: false},
    {id:3, text: '코딩', color: 'yellow', checked: true},
    {id:4, text: '영어', color: 'green', checked: false},
    {id:5, text: '밥먹기', color: 'blue', checked: true},
    {id:6, text: '샤워', color: 'navy', checked: false},
]


const Index: NextPage = () => {
    return <TodoList todos={todos}/>
};

export default Index;