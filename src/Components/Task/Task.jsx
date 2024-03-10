const Task = ({ title, backgroundColor }) => {
  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className="task--container"
    >
      <h4 className="task--title">{title}</h4>
    </div>
  );
};

export default Task;
