import { total } from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should filter by text value', (expenses) => {
    expect(expenses).toEqual("peas");
});