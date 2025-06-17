import {
  CartesianGrid, XAxis, YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer
} from 'recharts';

function BarGraph({ data }) {

  return (
    <div style={{ width: '100%', height: "100%" }} className='p-8' >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barCategoryGap={20} >
          <CartesianGrid strokeDasharray="5 5 " />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="salary" barSize={40} fill="#90D5FF" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarGraph;