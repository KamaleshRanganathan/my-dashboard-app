import { useState, useEffect } from "react";

function NewTask() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskStartTime, setTaskStartTime] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    // Sort tasks by deadline in descending order
    const sortedTasks = [...tasks].sort((a, b) => {
      const dateA = new Date(a.deadline);
      const dateB = new Date(b.deadline);
      return dateA - dateB;
    });
    localStorage.setItem("tasks", JSON.stringify(sortedTasks));
  }, [tasks]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      id: Date.now(), // Generate a unique ID
      name: taskName,
      description: taskDescription,
      startTime: taskStartTime,
      deadline: taskDeadline,
      status: status,
    };

    setTasks([...tasks, newTask]);
    setTaskName("");
    setTaskDescription("");
    setTaskStartTime("");
    setTaskDeadline("");
    setStatus("");
  };

  return (
    <div className="pt-20 pb-20 min-h-screen flex justify-center items-center w-full">
      <form
        onSubmit={handleSubmit}
        className="border border-neutral p-4 w-full max-w-md text-lg"
      >
        <div className="addNewTask flex flex-col text-lg lg:text-xl">
          <p className="text-3xl uppercase font-semibold text-center mb-5 lg:text-5xl">
            Add New Task
          </p>

          {/* Task Name */}
          <div className="flex flex-col mb-2">
            <label className="mb-1">Task Name:</label>
            <input
              type="text"
              required
              className="bg-secondary-content rounded-md text-secondary px-2 py-1 font-bold w-full"
              value={taskName}
              placeholder="Enter task name"
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>

          {/* Task Description */}
          <div className="flex flex-col mb-2">
            <label className="mb-1">Task Description:</label>
            <input
              type="text"
              className="bg-secondary-content rounded-md text-secondary px-2 py-1 font-bold w-full"
              value={taskDescription}
              placeholder="Enter task description (if any)"
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </div>

          {/* Task Start Time */}
          <div className="flex flex-col mb-2">
            <label className="mb-1">Task Start Time:</label>
            <input
              type="date"
              required
              className="bg-secondary-content rounded-md text-secondary px-2 py-1 font-bold w-full"
              value={taskStartTime}
              onChange={(e) => setTaskStartTime(e.target.value)}
            />
          </div>

          {/* Task Deadline */}
          <div className="flex flex-col mb-2">
            <label className="mb-1">Task Deadline:</label>
            <input
              type="date"
              required
              className="bg-secondary-content rounded-md text-secondary font-bold px-2 py-1 w-full"
              value={taskDeadline}
              onChange={(e) => setTaskDeadline(e.target.value)}
            />
          </div>

          {/* Completion Status */}
          <div className="flex flex-col mb-2">
            <label className="mb-1">Completion Status:</label>
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  name="status"
                  value="Yes"
                  required
                  checked={status === "Yes"}
                  onChange={() => setStatus("Yes")}
                />
                Yes
              </label>

              <label>
                <input
                  type="radio"
                  name="status"
                  value="No"
                  checked={status === "No"}
                  onChange={() => setStatus("No")}
                />
                No
              </label>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col mt-4 space-y-2">
            <button
              type="submit"
              className="text-lg bg-neutral text-neutral-content btn rounded-md shadow hover:bg-neutral/80 w-full"
            >
              Save
            </button>

            <button
              type="button"
              onClick={() => {
                setTaskName("");
                setTaskDescription("");
                setTaskStartTime("");
                setTaskDeadline("");
                setStatus("");
              }}
              className="text-lg bg-neutral text-neutral-content btn rounded-md shadow hover:bg-neutral/80 w-full"
            >
              Discard
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewTask;
