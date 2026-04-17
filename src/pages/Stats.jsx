import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useTimeline } from "../context/TimelineContext";

const COLORS = {
  Text: "#8B5CF6",
  Call: "#244D3F",
  Video: "#22C55E",
};

const CustomLegend = ({ payload }) => (
  <div className="flex justify-center gap-5 mt-4">
    {payload.map((entry) => (
      <span
        key={entry.value}
        className="flex items-center gap-1.5 text-sm text-gray-500"
      >
        <span
          className="inline-block w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: entry.color }}
        />
        {entry.value}
      </span>
    ))}
  </div>
);

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-100 shadow-md rounded-lg px-3 py-2 text-sm">
        <p className="font-semibold" style={{ color: payload[0].payload.fill }}>
          {payload[0].name}
        </p>
        <p className="text-gray-500">{payload[0].value} interactions</p>
      </div>
    );
  }
  return null;
};

const Stats = () => {
  const { entries } = useTimeline();

  const counts = entries.reduce(
    (acc, e) => {
      if (acc[e.type] !== undefined) acc[e.type]++;
      return acc;
    },
    { Call: 0, Text: 0, Video: 0 },
  );

  const chartData = Object.entries(counts)
    .filter(([, val]) => val > 0)
    .map(([name, value]) => ({ name, value }));

  return (
    <div className="bg-[#F8FAFC] min-h-screen px-4 py-6 sm:px-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Friendship Analytics</h1>

      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <p className="text font-bold  text-gray-800 mb-4">
          By Interaction Type
        </p>

        {chartData.length === 0 ? (
          <div className="text-center text-gray-400 py-16">
            No interactions yet. Log a check-in to see your analytics!
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                paddingAngle={4}
                dataKey="value"
              >
                {chartData.map((entry) => (
                  <Cell key={entry.name} fill={COLORS[entry.name]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend content={<CustomLegend />} />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default Stats;
