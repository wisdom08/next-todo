import {GetServerSideProps, NextPage} from 'next';
import TodoList from "../components/TodoList";
import {TodoType} from "../types/todo";
import {getDodosAPI} from "../lib/api/todo";

interface IProps {
    todos: TodoType[];
}


const Index: NextPage<IProps> = ({todos}) => {
    return <TodoList todos={todos}/>
};

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const {data} = await getDodosAPI();
        return {
            props: {todos: data},
        }

    } catch (e) {
        console.log("-> e", e);
        return {
            props: {},
        }
    }

}

export default Index;