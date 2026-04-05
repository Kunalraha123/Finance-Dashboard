import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const data = [
  { name: 'Food', value: 3500 },
  { name: 'Shopping', value: 5000 },
  { name: 'Housing', value: 12000 },
  { name: 'Bills', value: 2200 }
]

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444']

export default function ExpenseChart() {
  return (
    <div className="bg-white rounded-3xl shadow-md p-5 h-[320px]">
      <h3 className="text-xl font-semibold mb-4">Spending Breakdown</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={100} label>
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}