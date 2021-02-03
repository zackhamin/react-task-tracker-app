import { useState } from 'react'

const AddTask = () => {

    const [text, setText] = useState(" ")
    const [day, setDay] = useState(" ")
    const [reminder, setRreminder] = useState(false)




    return (
        <form className="add-form">
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder='Add Day & Time' value={text} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" placeholder="Add Task" value={reminder} onChange={(e) => setRreminder(e.currentTarget.checked)}/>
            </div>
            
            <input type="submit" value="Save Task" className="btn btn-block" />
        </form>
    )
}

export default AddTask
