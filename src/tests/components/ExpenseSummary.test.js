import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('count and total 2 expenses', () => {
  const wrapper = shallow(<ExpenseSummary expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test('count and total 1 expense', () => {
  const wrapper = shallow(<ExpenseSummary expenses={[expenses[0]]} />);
  expect(wrapper).toMatchSnapshot();
});

test('count and total 0 expenses', () => {
  const wrapper = shallow(<ExpenseSummary expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});