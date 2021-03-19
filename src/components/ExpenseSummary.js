import React from 'react';
import { connect } from 'react-redux';
import { getExpensesTotal } from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';
import "numeral/locales/en-gb";

// switch between locales
numeral.locale('en-gb');

export const ExpenseSummary = (props) => (
   <div>Viewing {props.expenses.length} expense(s) totalling {numeral(getExpensesTotal(props.expenses) / 100).format('$0,0.00')} </div>
   );

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
 