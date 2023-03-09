import { useRef, useEffect } from 'react'
import { useFetcher } from 'react-router-dom'
import {AiOutlinePlusCircle} from 'react-icons/ai'

const AddExpenseForm = ({ budgets }) => {
  const fetcher = useFetcher()
  const isSubmitting = fetcher.state === 'submitting'
  const formRef = useRef()
  const focusRef = useRef()

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset()
      focusRef.current.focus()
    }
  }, [isSubmitting])

  return (
    <div className='form-wrapper'>
      <h2 className='h3'>
        Add New{' '}
        <span className='accent'>
          {budgets.length === 1 && `${budgets.map((budg) => budg.name)}`}
        </span>{' '}
        Expense
      </h2>
      <fetcher.Form method='post' className='grid-sm' ref={formRef}>
        <div className='expense-inputs'>
          <div className='grid-xs'>
            <label htmlFor='newExpenese'>Expense Name</label>
            <input
              type='text'
              id='newExpense'
              name='newExpense'
              placeholder='e.g., Coffe'
              ref={focusRef}
              required
            />
          </div>
          <div className='grid-xs'>
            <label htmlFor='newExpeneseAmount'>Expense Name</label>
            <input
              type='number'
              id='newExpenseAmount'
              name='newExpenseAmount'
              placeholder='5€'
              inputMode='decimal'
              step='0.01'
              ref={focusRef}
              required
            />
          </div>
        </div>
        <div className="grid-xs" hidden={budgets.length === 1}>
            <label htmlFor='newExpenseBudget'>Budget Category</label>
            <select name="newExpenseBudget" id="newExpenseBudget" required>
                {budgets.sort((a, b) => a.createdAt - b.createdAt).map((budg) =>(
                    <option key={budg.id} value={budg.id}>{budg.name}</option>
                ))}
            </select>
        </div>
        <input type="hidden" name="_action" value='createExpense' />
        <button disabled={isSubmitting} className='btn btn--dark' type="submit">
                {isSubmitting? 'Adding Expense...' : (
                  <>
                  <span>Add Expense</span>
                  <AiOutlinePlusCircle size={20} />
                  </>
                )}
              </button>
      </fetcher.Form>
    </div>
  );
};
export default AddExpenseForm;
