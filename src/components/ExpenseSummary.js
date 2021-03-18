import React from 'react';
import { connect } from 'react-redux';
import { getExpensesTotal } from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import texpenses from '../tests/fixtures/expenses';

export const ExpenseSummary = (props) => (
   <div>Viewing {props.expenses.length} expenses totalling {getExpensesTotal(props.expenses)}</div>
   );

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
 