
const getExpensesTotal = (expenses) => {
    return expenses.map(expense => expense.amount) ;
};

export const total = getExpensesTotal(expenses);
