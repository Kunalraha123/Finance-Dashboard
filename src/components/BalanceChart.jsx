import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const data = [
  { month: 'Jan', balance: 30000 },
  { month: 'Feb', balance: 45000 },
  { month: 'Mar', balance: 52000 },
  { month: 'Apr', balance: 48000 },
  { month: 'May', balance: 70000 }
]

export default function BalanceChart() {
  return (
    <div className="bg-white rounded-3xl shadow-md p-5 h-[320px]">
      <h3 className="text-xl font-semibold mb-4">Balance Trend</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="balance" stroke="#2563eb" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}