import {redirect} from 'react-router-dom'
import {toast} from 'react-toastify'
import { deleteItem } from '../helpers'

const logoutAction = async () => {
  //delete de user
  deleteItem({key: 'userName'})
  deleteItem({key: 'budgets'})
  deleteItem({key: 'expenses'})
  toast.success("You've deleted your account 👋")
  //return redirect
  return redirect('/')
}

export default logoutAction