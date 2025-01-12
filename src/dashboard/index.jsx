import BarPlot from "../components/BarPlot";
import PieChartPlot from "../components/PieChartPlot";

export default function Dashboard() {
  return (
    <div className="py-20 bg-base-100 text-base-content ">
      <p className="uppercase font-semibold text-2xl text-center">Dashboard</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="pt-20 p-2 text-base-content">
          <p className="text-lg font-medium text-center my-5">
            Bar chart of task Completion
          </p>
          <BarPlot />
        </div>
        <div className="pt-20 p-2 text-base-content">
          <p className="text-lg font-medium text-center my-5">
            Pie chart of task Completion
          </p>
          <PieChartPlot />
        </div>
      </div>
    </div>
  );
}
