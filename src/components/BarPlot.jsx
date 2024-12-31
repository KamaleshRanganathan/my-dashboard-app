import { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default class Example extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [], // Initialize tasks as an empty array
    };
  }

  componentDidMount() {
    const storedTasks = localStorage.getItem("tasks");
    this.setState({ tasks: storedTasks ? JSON.parse(storedTasks) : [] });
  }

  render() {
    const { tasks } = this.state;

    // Data processing and conditional rendering combined for efficiency
    return (
      <ResponsiveContainer width="100%" height={300}>
        {tasks.length > 0 ? (
          <BarChart
            width={500}
            height={300}
            data={getBarData(tasks)} // Use a separate function for clarity
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="count"
              fill="#82ca9d"
              activeBar={<Rectangle fill="#e4afff" stroke="purple" />}
            />
          </BarChart>
        ) : (
          <p>No tasks found in localStorage. Try Adding New Task</p>
        )}
      </ResponsiveContainer>
    );
  }
}

// Function to create bar chart data
function getBarData(tasks) {
  const statusCounts = {
    Yes: tasks.filter((task) => task.status === "Yes").length,
    No: tasks.filter((task) => task.status === "No").length,
  };

  return [
    { name: "Completed", count: statusCounts.Yes },
    { name: "Not Completed", count: statusCounts.No },
  ];
}
