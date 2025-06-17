import {
  AreaChart, Area,
  CartesianGrid, XAxis, YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

function AreaGraph({ data }) {
  return (
    <div style={{ width: '100%', height: "100%" }} className='p-10'>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#90D5FF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8dcfec" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="salary"
            stroke="#90D5FF"
            fill="url(#gradientFill)"
            fillOpacity={1}
          />
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AreaGraph;
