import { Form, Link } from 'react-router-dom'
import {HiBanknotes} from 'react-icons/hi2'
import { formatCurrency, calculateSpentByBudget, formatPercentage } from '../helpers'
import { FaTrashAlt } from 'react-icons/fa'

const BudgetItem = ({budget, showDelete = false}) => {
    const {id, name, amount, color} = budget
    const spent = calculateSpentByBudget(id)

  return (
    <div style={{'--accent': color}} className="budget">
        <div className="progress-text">
            <h3>{name}</h3>
            <p>{formatCurrency(amount)} Budgeted</p>
        </div>
        <progress value={spent} max={amount}>
            {formatPercentage(spent / 100)}
        </progress>
        <div className="progress-text">
            <small>{formatCurrency(spent)} spent</small>
            <small>{formatCurrency(amount - spent)} remaining</small>
        </div>
        {showDelete ? (
        <div className="flex sm">
             <Form method='post' action='delete' onSubmit={(e) => {
                if(!confirm('Are you sure you want to delete this budget?')){
                    e.preventDefault()
                }
             }}>
            <button className="btn" type='submit'>
                <span>Delete Budget</span>
                <FaTrashAlt size={20} />
            </button>
         </Form>
        </div>
        ):(
           <div className="flex-sm">
             <Link to={`/budget/${id}`} className='btn'>
            <span>View Details</span>
            <HiBanknotes size={20} />
            </Link>
           </div>
        )}
    </div>
  )
}
export default BudgetItem