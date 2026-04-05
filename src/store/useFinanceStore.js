import { create } from 'zustand'
import { transactionsData } from '../data/transactions.js'

export const useFinanceStore = create((set) => ({
  role: 'viewer',
  search: '',
  filterType: 'all',
  transactions: transactionsData,

  setRole: (role) => set({ role }),
  setSearch: (search) => set({ search }),
  setFilterType: (filterType) => set({ filterType }),

  addTransaction: (transaction) =>
    set((state) => ({
      transactions: [...state.transactions, transaction]
    }))
}))