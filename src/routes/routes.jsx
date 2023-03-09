import { createBrowserRouter } from 'react-router-dom'
import { budgetAction, dashboardAction, deleteBudget, expensesAction, logoutAction } from '../actions'
import { Main } from '../layouts'
import { budgetLoader, dashboardLoader, expensesLoader, mainLoader } from '../loaders'
import { BudgetPage, Dashboard, Error, ExpensesPage } from '../pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: 'budget/:id',
        element: <BudgetPage />,
        loader: budgetLoader,
        action: budgetAction,
        errorElement: <Error />,
        children: [
          {
            path: 'delete',
            action: deleteBudget
          },
        ]
      },
      {
        path: 'expenses',
        element: <ExpensesPage />,
        loader: expensesLoader,
        action: expensesAction,
        errorElement: <Error />,
      },
      {
        path: 'logout',
        action: logoutAction
      }
    ],
  }
])

export default router
