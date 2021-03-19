import React from 'react';
import { connect } from 'react-redux';
import { getExpensesTotal } from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';
import "numeral/locales/en-gb";

// switch between locales
numeral.locale('en-gb');


export const ExpenseSummary = ({ getExpenseCount, formattedExpenseTotal }) => {
  const expenseWord = getExpenseCount === 1 ? 'expense' : 'expenses';
  return (
    <div>Viewing {getExpenseCount} {expenseWord} totalling {formattedExpenseTotal} </div>
     )
}
  

const mapStateToProps = (state) => {
  const expensesFromStore = selectExpenses(state.expenses, state.filters)
  return {
    getExpenseCount: expensesFromStore.length,
    formattedExpenseTotal: numeral(getExpensesTotal(expensesFromStore) / 100).format('$0,0.00')
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
 