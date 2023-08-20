import type { Task } from './TaskList';
import { useEffect, useState } from 'react';
const Item = (props: { task: Task }) => {
  const max = 100;
  const className =
    props.task.progress < max ? 'progress-primary' : 'progress-success';
  return (
    <div className="flex flex-row items-center space-x-3">
      <p className="w-8 text-center">{props.task.id}</p>
      <progress
        className={'progress w-56 ' + className}
        value={props.task.progress}
        max="100"
      ></progress>
      <p className="text-center">
        {props.task.progress < 100 ? props.task.progress + '%' : 'Complete!'}
      </p>
    </div>
  );
};
export default Item;
