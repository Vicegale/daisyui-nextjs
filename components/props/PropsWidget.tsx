type Color = 'bg-primary' | 'bg-secondary' | 'bg-accent';

const PropsWidget = (props: { color: Color }) => {
  const className = props.color;
  return (
    <div className={className + ' rounded-md text-black'}>{props.color}</div>
  );
};

export default PropsWidget;
