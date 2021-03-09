import { getExpensesTotal } from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should total expenses', () => {
    const total = getExpensesTotal(expenses);
    expect(total).toBe(114195);
});

test('should return 0 when no expenses are given', () => {
    const total = getExpensesTotal([]);
    expect(total).toBe(0);
});