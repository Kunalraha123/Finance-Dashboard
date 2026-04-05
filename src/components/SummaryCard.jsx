export default function SummaryCard({ title, amount, color }) {
  return (
    <div className={`rounded-3xl p-5 shadow-md ${color}`}>
      <p className="text-sm text-gray-600">{title}</p>
      <h2 className="text-3xl font-bold mt-2">₹{amount.toLocaleString()}</h2>
    </div>
  )
}