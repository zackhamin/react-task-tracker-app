import Tasks from "./Tasks"
    const Task = ({ task, onDelete }) => {

    return (
        <>
            {task.map((tasks) =>(
            <Tasks onDelete={onDelete} key={tasks.id} task={tasks} />
            ))}
        </>
    )
            }

export default Task
