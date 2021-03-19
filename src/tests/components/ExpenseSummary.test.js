import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('count and total 2 expenses', () => {
  const wrapper = shallow(<ExpenseSummary getExpenseCount={2} formattedExpenseTotal={"£2.25"} />);
  expect(wrapper).toMatchSnapshot();
});

test('count and total 1 expense', () => {
  const wrapper = shallow(<ExpenseSummary getExpenseCount={1} formattedExpenseTotal={"£1.25"} />);
  expect(wrapper).toMatchSnapshot();
});

test('count and total 0 expenses', () => {
  const wrapper = shallow(<ExpenseSummary getExpenseCount={0} formattedExpenseTotal={"£0.00"} />);
  expect(wrapper).toMatchSnapshot();
});