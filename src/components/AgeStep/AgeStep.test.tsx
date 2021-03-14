import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import AgeStep from './AgeStep';
import { clickNextButton } from '../../test-helper/ClickOnNextButton';

const callBackFn = jest.fn();

const renderComponent = () => {
  return (render(<AgeStep cb={callBackFn} />));
}

test('should show input for age', () => {
  renderComponent();

  const AgeInput = screen.getByText(/Age/i)

  expect(AgeInput).toBeInTheDocument();
});

test('should call callback function on submit', () => {
  const mockSubmit = jest.fn();

  render(<AgeStep cb={mockSubmit} />)
  fireEvent.change(screen.getByLabelText(/Age/i), { target: { value: 24 } });
  clickNextButton();

  expect(mockSubmit).toHaveBeenCalled();
});

test('should not call callback function if validation failed', () => {
  const mockSubmit = jest.fn();

  render(<AgeStep cb={mockSubmit} />)
  fireEvent.change(screen.getByLabelText(/Age/i), { target: { value: 'test' } });
  clickNextButton();

  expect(mockSubmit).not.toHaveBeenCalled();
});




