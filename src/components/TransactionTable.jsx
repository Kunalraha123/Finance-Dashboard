import { useFinanceStore } from '../store/useFinanceStore.js'

export default function TransactionTable() {
  const {
    transactions,
    search,
    filterType,
    setSearch,
    setFilterType,
    role
  } = useFinanceStore()

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.title
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesType =
      filterType === 'all'
        ? true
        : transaction.type === filterType

    return matchesSearch && matchesType
  })

  return (
    <div className="bg-white rounded-3xl shadow-md p-5">
      <div className="flex flex-col md:flex-row gap-4 justify-between mb-5">
        <input
          type="text"
          placeholder="Search transaction"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-xl px-4 py-2 w-full md:w-72"
        />

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="border rounded-xl px-4 py-2"
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-left">
              <th className="py-3">Date</th>
              <th className="py-3">Title</th>
              <th className="py-3">Category</th>
              <th className="py-3">Type</th>
              <th className="py-3">Amount</th>
              {role === 'admin' && <th className="py-3">Actions</th>}
            </tr>
          </thead>

          <tbody>
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((transaction) => (
                <tr key={transaction.id} className="border-b">
                  <td className="py-3">{transaction.date}</td>
                  <td className="py-3">{transaction.title}</td>
                  <td className="py-3">{transaction.category}</td>
                  <td className="py-3 capitalize">{transaction.type}</td>
                  <td
                    className={`py-3 font-semibold ${
                      transaction.type === 'income'
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    ₹{transaction.amount}
                  </td>

                  {role === 'admin' && (
                    <td className="py-3">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded-lg mr-2">
                        Edit
                      </button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded-lg">
                        Delete
                      </button>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={role === 'admin' ? 6 : 5}
                  className="text-center py-6 text-gray-500"
                >
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}