import { useEffect, useState } from 'react';
import Item from './Item';

export type Task = {
    id: number;
    progress: number;
}

const TaskList = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTasks(tasks.map((t: Task) => { 
                return {id: t.id, progress: (t.progress < 100) ? t.progress + 1 : t.progress}
            }));        
        }, 50);
        return () => clearInterval(intervalId);
    })

    const addTask = () => {
        setTasks([...tasks, {id: tasks.length + 1, progress: 0}]);
    }

    return (
        <div className="w-96 m-4 p-2 border-solid border-2 border-primary rounded-lg">
            <button className="btn btn-primary" onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task: Task) => (
                    <li key={task.id}>
                        <Item task={task} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList;
