import { useState, useEffect } from "react";
import AllTask from "../components/AllTasks";
import CompletedTask from "../components/CompletedTasks";
import InProgressTask from "../components/InProgressTasks";
import PastDueTask from "../components/PastDueTasks";

const TaskManager = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete this task?`)) {
      const updatedTasks = tasks.filter((task) => task.id !== id);
      setTasks(updatedTasks);
    }
  };

  const handleUpdateStatus = (id, status) => {
    const taskToUpdate = tasks.find((task) => task.id === id);
    if (taskToUpdate) {
      const confirmationMessage =
        status === "Yes"
          ? `Are you sure you want to mark "${taskToUpdate.name}" as Done?`
          : `Are you sure you want to mark "${taskToUpdate.name}" as Not Done?`;

      if (window.confirm(confirmationMessage)) {
        const updatedTasks = tasks.map((task) => {
          if (task.id === id) {
            return { ...task, status }; // Update the status
          }
          return task;
        });
        setTasks(updatedTasks);
      }
    }
  };

  return (
    <div className="py-20">
      <AllTask
        tasks={tasks}
        onDelete={handleDelete}
        onUpdateStatus={handleUpdateStatus}
      />
      <InProgressTask
        tasks={tasks}
        onDelete={handleDelete}
        onUpdateStatus={handleUpdateStatus}
      />
      <CompletedTask
        tasks={tasks}
        onDelete={handleDelete}
        onUpdateStatus={handleUpdateStatus}
      />
      <PastDueTask
        tasks={tasks}
        onDelete={handleDelete}
        onUpdateStatus={handleUpdateStatus}
      />
    </div>
  );
};

export default TaskManager;
