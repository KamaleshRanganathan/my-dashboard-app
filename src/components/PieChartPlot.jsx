import { PureComponent } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";

const today = new Date();

function getBarData(tasks) {
  const statusCounts = {
    Completed: tasks.filter((task) => task.status === "Yes").length,
    NotCompleted: tasks.filter((task) => task.status === "No").length,
    PastDue: tasks.filter(
      (task) => task.status === "No" && new Date(task.deadline) < today,
    ).length,
  };

  // Calculate Not Completed minus Past Due
  const notCompletedAdjusted = statusCounts.NotCompleted - statusCounts.PastDue;

  return [
    { name: "Completed", value: statusCounts.Completed, fill: "#007f5f" },
    {
      name: "Not Completed",
      value: notCompletedAdjusted >= 0 ? notCompletedAdjusted : 0,
      fill: "#ff8800",
    },
    { name: "Past Due", value: statusCounts.PastDue, fill: "#e53d00" },
  ];
}

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default class Example extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [], // Initialize tasks as an empty array
      activeIndex: 0, // Initialize activeIndex in the state
    };
  }

  componentDidMount() {
    const storedTasks = localStorage.getItem("tasks");
    this.setState({ tasks: storedTasks ? JSON.parse(storedTasks) : [] });
  }

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const { tasks, activeIndex } = this.state;

    // const colors = ['80ffdb','ffea00','e53d00'];

    return (
      <div style={{ width: "100%", height: "400px" }}>
        {" "}
        {/* Set a specific height for the parent container */}
        <ResponsiveContainer>
          <PieChart>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={getBarData(tasks)}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              dataKey="value"
              onMouseEnter={this.onPieEnter}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
