import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import BuyFlow, { ProductIds } from './BuyFlow';
import { clickNextButton } from '../../test-helper/ClickOnNextButton';


const renderComponent = () => {
  return (render(<BuyFlow productId={ProductIds.devIns} />));
}

test('should show input for firstnama', () => {
  renderComponent();
  const firstNameInput = screen.getByLabelText(/First name/i)

  expect(firstNameInput).toBeInTheDocument();
});

test('should show input for lastname', () => {
  renderComponent();
  const lastNameInput =  screen.getByLabelText(/Last name/i)

  expect(lastNameInput).toBeInTheDocument();
});

test('should show input for email', () => {
  const { getByLabelText } = renderComponent();

  fireEvent.change(getByLabelText(/Last Name/i), { target: { value: 'Doe' } });
  fireEvent.change(getByLabelText(/First Name/i), { target: { value: 'John' } });

  clickNextButton();

  const emailInput = screen.getByText(/Email/i)

  expect(emailInput).toBeInTheDocument();
});

test('should show input for age', () => {
  const { getByLabelText } = renderComponent();

  fireEvent.change(getByLabelText(/First Name/i), { target: { value: 'John' } });
  fireEvent.change(getByLabelText(/Last Name/i), { target: { value: 'Doe' } });

  clickNextButton();

  fireEvent.change(getByLabelText(/Email/i), { target: { value: 'JohnDoe@test.com' } });

  clickNextButton();

  const AgeInput =  screen.getByText(/Age/i)

  expect(AgeInput).toBeInTheDocument();
});

test('should show summary with data from form', () => {
  const { getByLabelText } =  renderComponent();

  fireEvent.change(getByLabelText(/First Name/i), { target: { value: 'John' } });
  fireEvent.change(getByLabelText(/Last Name/i), { target: { value: 'Doe' } });
  clickNextButton();

  fireEvent.change(getByLabelText(/Email/i), { target: { value: 'JohnDoe@test.com' } });
  clickNextButton();

  fireEvent.change(getByLabelText(/Age/i), { target: { value: 24 } });
  clickNextButton();

  const SummaryFullName =  screen.getByText(/John Doe/i)
  const SummaryEmail =  screen.getByText(/JohnDoe@test.com/i)
  const SummaryAge =  screen.getByText(/24/i)

  expect(SummaryFullName).toBeInTheDocument();
  expect(SummaryEmail).toBeInTheDocument();
  expect(SummaryAge).toBeInTheDocument();
});


