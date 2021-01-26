import Tasks from "./Tasks"
    const Task = ({ task, onDelete, onToggle }) => {

    return (
        <>
            {task.map((tasks) =>(
            <Tasks onToggle={onToggle} onDelete={onDelete} key={tasks.id} task={tasks} />
            ))}
        </>
    )
            }

export default Task
