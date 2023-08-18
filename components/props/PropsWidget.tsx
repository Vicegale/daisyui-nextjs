type Color = 'primary' | 'secondary' | 'accent';

const PropsWidget = (props: { color: Color }) => {
  const className = 'bg-' + props.color;
  return (
    <div className={className + ' rounded-md text-black'}>{props.color}</div>
  );
};

export default PropsWidget;
