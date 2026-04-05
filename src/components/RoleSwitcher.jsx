import { useFinanceStore } from '../store/useFinanceStore'

export default function RoleSwitcher() {
  const role = useFinanceStore((state) => state.role)
  const setRole = useFinanceStore((state) => state.setRole)

  return (
    <select
      value={role}
      onChange={(e) => setRole(e.target.value)}
      className="border rounded-xl px-4 py-2"
    >
      <option value="viewer">Viewer</option>
      <option value="admin">Admin</option>
    </select>
  )
}