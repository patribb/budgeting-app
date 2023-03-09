import {useRef, useEffect} from 'react'
import {Form, useFetcher} from 'react-router-dom'
import {BsCurrencyEuro} from 'react-icons/bs'

const AddBudgetForm = () => {
  const fetcher = useFetcher()
  const isSubmitting = fetcher.state === 'submitting'

  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset()
      focusRef.current.focus()
    }
  }, [isSubmitting])
  

  return (
    <div className="form-wrapper">
        <h2 className="h3">
            Create Budget
        </h2>
        <fetcher.Form method='post' className='grid-sm' ref={formRef}>
            <div className="grid-xs">
                <label htmlFor="newBudget">Budget Name</label>
                <input ref={focusRef} type="text" name="newBudget" id="newBudget" placeholder="e.g., Groceries" required />
            </div>
            <div className="grid-xs">
              <label htmlFor="newBudgetAmount">Amount</label>
              <input type="number" step='0.1' inputMode='decimal' name="newBudgetAmount" id="newBudgetAmount" placeholder="100€" required />
            </div>
            <div className="grid-xs">
              <input type="hidden" name="_action" value='createBudget' />
              <button disabled={isSubmitting} className='btn btn--dark' type="submit">
                {isSubmitting? 'Creating budget...' : (
                  <>
                  <span>Create Budget</span>
                  <BsCurrencyEuro size={20} />
                  </>
                )}
              </button>
            </div>
        </fetcher.Form>
    </div>
  )
}
export default AddBudgetForm