import { useEffect, useState } from 'react';
import Item from './Item';

export type Task = {
  id: number;
  progress: number;
};

const TaskList = () => {
  const [currentId, setCurrentID] = useState<number>(1);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTasks(
        tasks.map((t: Task) => {
          return {
            id: t.id,
            progress: t.progress < 100 ? t.progress + 1 : t.progress,
          };
        })
      );
    }, 50);
    return () => clearInterval(intervalId);
  });

  const addTask = () => {
    setTasks([...tasks, { id: currentId, progress: 0 }]);
    setCurrentID(currentId + 1);
  };

  const removeCompleted = () => {
    setTasks(
      tasks.filter((t) => {
        return t.progress !== 100;
      })
    );
  };

  return (
    <div className="w-96 m-4 p-2 border-solid border-2 border-primary rounded-lg">
      <div className="flex flex-row space-x-1">
        <button className="btn btn-primary w-1/2" onClick={addTask}>
          Add Task
        </button>
        <button className="btn btn-primary w-1/2" onClick={removeCompleted}>
          Remove Done
        </button>
      </div>
      <ul className="mt-2">
        {tasks.map((task: Task) => (
          <li key={task.id}>
            <Item task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
