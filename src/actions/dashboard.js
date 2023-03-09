import { toast } from 'react-toastify';
import { createBudget, createExpense, deleteItem, wait } from '../helpers';

const dashboardAction = async ({ request }) => {
  await wait()
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);
  // new user submission
  if (_action === 'newUser') {
    try {
      localStorage.setItem('userName', JSON.stringify(values.userName));
      return toast.success(`Welcome ${values.userName} 😃!`);
    } catch (err) {
      throw new Error('There was a problem with your login');
    }
  }
  if(_action === 'createBudget') {
    try {
      //create budget
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount
      })
      return toast.success('Budget created successfully 😃');
    } catch (err) {
      throw new Error('There was a problem creating your budget');
    }
  }

  if(_action === 'createExpense') {
    try {
      //create Expense
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget
      })
      return toast.success(`Expense ${values.newExpense} created successfully 😃`);
    } catch (err) {
      throw new Error('There was a problem creating your expense');
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
      throw new Error('There was a problem deleting your expense');
    }
  }
};

export default dashboardAction;
