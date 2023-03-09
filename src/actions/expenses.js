import { toast } from "react-toastify";
import { deleteItem } from "../helpers";

const expensesAction = async ({request}) => {
 const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);
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
}

export default expensesAction