import type { Task } from './TaskList';
import { useEffect, useState } from 'react';
const Item = (props: { task: Task }) => {
    const max = 100;
    const className = (props.task.progress < max) ? "progress-primary" : "progress-secondary";
    return (
        <div>
            <span>{props.task.id}</span>
            <progress className={"progress w-56 " + className} value={props.task.progress} max="100"></progress>
            <span>{props.task.progress < 100 ? props.task.progress + "%" : "Complete!"}</span>
        </div>
    )
};
export default Item;
