import SummaryCard from './components/SummaryCard.jsx'
import BalanceChart from './components/BalanceChart.jsx'
import ExpenseChart from './components/ExpenseChart.jsx'
import TransactionTable from './components/TransactionTable.jsx'
import InsightsPanel from './components/InsightsPanel.jsx'
import RoleSwitcher from './components/RoleSwitcher.jsx'
import { useFinanceStore } from './store/useFinanceStore.js'

export default function App() {
  const transactions = useFinanceStore((state) => state.transactions)

  const totalIncome = transactions
    .filter((item) => item.type === 'income')
    .reduce((sum, item) => sum + item.amount, 0)

  const totalExpense = transactions
    .filter((item) => item.type === 'expense')
    .reduce((sum, item) => sum + item.amount, 0)

  const totalBalance = totalIncome - totalExpense

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold">Finance Dashboard</h1>
            <p className="text-gray-500 mt-1">
              Track your income and expenses easily
            </p>
          </div>

          <RoleSwitcher />
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <SummaryCard
            title="Total Balance"
            amount={totalBalance}
            color="bg-green-100"
          />

          <SummaryCard
            title="Income"
            amount={totalIncome}
            color="bg-blue-100"
          />

          <SummaryCard
            title="Expenses"
            amount={totalExpense}
            color="bg-red-100"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <BalanceChart />
          <ExpenseChart />
        </div>

        <TransactionTable />

        <InsightsPanel />
      </div>
    </div>
  )
}