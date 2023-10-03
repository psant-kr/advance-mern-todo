import { FaTrash, FaEdit } from 'react-icons/fa';

const Todo = ({ todo }) => {
    return (

        <li>
            <span>{todo.data}</span>
            <span> <FaTrash /> </span>
            <span><FaEdit /></span>
        </li>
    )
}

export default Todo;