export default function InsightsPanel() {
  return (
    <div className="bg-white rounded-3xl shadow-md p-5">
      <h3 className="text-xl font-semibold mb-4">Insights</h3>

      <div className="space-y-4">
        <div className="bg-slate-100 rounded-2xl p-4">
          <p className="font-medium">Highest Spending Category</p>
          <p className="text-gray-600">Housing is the biggest expense this month.</p>
        </div>

        <div className="bg-slate-100 rounded-2xl p-4">
          <p className="font-medium">Monthly Comparison</p>
          <p className="text-gray-600">Expenses increased by 12% compared to last month.</p>
        </div>

        <div className="bg-slate-100 rounded-2xl p-4">
          <p className="font-medium">Savings Observation</p>
          <p className="text-gray-600">You saved 46% of your total income.</p>
        </div>
      </div>
    </div>
  )
}