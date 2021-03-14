import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import EmailStep from './EmailStep';
import { clickNextButton } from '../../test-helper/ClickOnNextButton';

const callBackFn = jest.fn();

const renderComponent = () => {
  return (render(<EmailStep cb={callBackFn} />));
}

test('should show input for age', () => {
  renderComponent();

  const EmailInput =  screen.getByText(/Email/i)

  expect(EmailInput).toBeInTheDocument();
});

test('should call callback function on submit', () => {
  const mockSubmit = jest.fn();

  render(<EmailStep cb={mockSubmit} />)
  fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'email@email.com' } });
  clickNextButton();

  expect(mockSubmit).toHaveBeenCalled();
});

test('should not call callback function if validation failed', () => {
  const mockSubmit = jest.fn();

  render(<EmailStep cb={mockSubmit} />)
  fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: '' } });
  clickNextButton();

  expect(mockSubmit).not.toHaveBeenCalled();
});




