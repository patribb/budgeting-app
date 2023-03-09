import { fetchData } from "../helpers"

const expensesLoader = () => {
    const expenses = fetchData('expenses')
    return {expenses}
}

export default expensesLoader