import { Link, useFetcher } from 'react-router-dom'
import { formatCurrency, formatDate, getAllMatchingItems } from '../helpers'
import {FaTrash} from 'react-icons/fa'

const ExpenseItem = ({expense, showBudget}) => {
  const fetcher = useFetcher()
  const budget = getAllMatchingItems({
    category: 'budgets',
    key: 'id',
    value: expense.budgetId
  })[0]

  return (
    <>
    <td>{expense.name}</td>
    <td>{formatCurrency(expense.amount)}</td>
    <td>{formatDate(expense.createdAt)}</td>
    {showBudget &&(<td>
      <Link style={{'--accent': budget.color}} to={`budget/${budget.id}`}>{budget.name}</Link>
    </td>)}
    <td>
      <fetcher.Form method='post'>
        <input type="hidden" name='_action' value='deleteExpense' />
        <input type="hidden" name='expenseId' value={expense.id} />
        <button className='btn btn--warning' aria-label={`Delete ${expense.name} expense`} type='submit'>
          <FaTrash size={20} />
        </button>
      </fetcher.Form>
    </td>
    </>
  )
}
export default ExpenseItem

