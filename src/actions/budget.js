import { toast } from 'react-toastify'
import { createExpense, deleteItem } from '../helpers'

const budgetAction = async ({request}) => {
    const data = await request.formData()
     const { _action, ...values } = Object.fromEntries(data)
     if(_action === 'createExpense') {
      try {
        //create Expense
        createExpense({
          name: values.newExpense,
          amount: values.newExpenseAmount,
          budgetId: values.newExpenseBudget
        })
        return toast.success(`Expense ${values.newExpense} created successfully 😃`)
      } catch (err) {
        throw new Error('There was a problem creating your expense')
      }
    }

     if(_action === 'deleteExpense') {
       try {
         deleteItem({
           key: 'expenses',
           id: values.expenseId
         })
         return toast.success('Expense deleted😃!')
       } catch (err) {
         throw new Error('There was a problem deleting your expense')
       }
     }
   }

export default budgetAction