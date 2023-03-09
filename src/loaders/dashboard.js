import {fetchData} from '../helpers'

// loader
const dashboardLoader = () => {
  const userName = fetchData('userName')
  const budgets = fetchData('budgets')
  const expenses = fetchData('expenses')
  return {userName, budgets, expenses}
}

export default dashboardLoader
