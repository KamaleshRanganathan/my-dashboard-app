import { useState } from "react";
import PropTypes from "prop-types";

export default function AllTask({ tasks, onDelete, onUpdateStatus }) {
  const [isHidden, setIsHidden] = useState(false);

  const handleButtonClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      <div className="w-full m-auto text-center mb-2 mt-2">
        <a
          className="uppercase font-bold text-center text-xl btn bg-neutral text-neutral-content"
          onClick={handleButtonClick}
        >
          All Tasks
        </a>
      </div>
      <div id="content1" style={{ display: isHidden ? "block" : "none" }}>
        {tasks.map((task) => (
          <div key={task.id} className="flex p-2 w-6/8 m-auto ">
            <div className="flex flex-wrap my-2 border border-neutral p-2 w-3/4 m-auto">
              <p className="mx-4">
                Task Name: <b>{task.name}</b>
              </p>
              <p className="mx-4">Task Desc: {task.description}</p>
              <p className="mx-4">Start Time: {task.startTime}</p>
              <p className="mx-4">Deadline: {task.deadline}</p>
              <p className="mx-4">Completion Status: {task.status}</p>
            </div>
            <div className="border border-neutral p-2 max-w-1/4 h-auto my-2 ml-2 flex items-center justify-center">
              <div id="YesorNo">
                {task.status === "Yes" && (
                  <button
                    className="btn flex items-center justify-center bg-base-100 border-transparent shadow-none rounded-sm"
                    onClick={() => onUpdateStatus(task.id, "No")}
                  >
                    <img src="src/assets/wrong.svg" alt="Mark as Not Done" />
                  </button>
                )}
                {task.status === "No" && (
                  <button
                    className="btn flex items-center justify-center bg-base-100 border-transparent shadow-none rounded-sm"
                    onClick={() => onUpdateStatus(task.id, "Yes")}
                  >
                    <img src="src/assets/tick.svg" alt="Mark as Done" />
                  </button>
                )}
              </div>
              <button
                className="btn flex items-center justify-center bg-base-100 border-transparent shadow-none rounded-sm"
                onClick={() => onDelete(task.id)}
              >
                <img src="src/assets/trash-2.svg" alt="Delete" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// PropTypes validation
AllTask.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      startTime: PropTypes.string.isRequired,
      deadline: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdateStatus: PropTypes.func.isRequired,
};
