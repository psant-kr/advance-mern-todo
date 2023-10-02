

const Todo = ({ todo }) => {
    return (

        <li>
            <span>{todo.data}</span>
            <span> <i class="fa-solid fa-trash"></i> </span>
        </li>
    )
}

export default Todo;