import React from 'react';
import { render, screen } from '@testing-library/react';
import SummaryStep from './SummaryStep';

const renderComponent = () => {
  const userData = {
    name: 'John Doe',
    email: 'JohnDoe@test.com',
    age: 24
  }
  return (render(<SummaryStep collectedData={userData} />));
}

test('should show all collected data', () => {
  renderComponent();

  const SummaryFullName = screen.getByText(/John Doe/i)
  const SummaryEmail = screen.getByText(/JohnDoe@test.com/i)
  const SummaryAge = screen.getByText(/24/i)

  expect(SummaryFullName).toBeInTheDocument();
  expect(SummaryEmail).toBeInTheDocument();
  expect(SummaryAge).toBeInTheDocument();
});





