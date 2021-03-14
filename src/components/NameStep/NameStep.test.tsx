import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import NameStep from './NameStep';
import { clickNextButton } from '../../test-helper/ClickOnNextButton';

const callBackFn = jest.fn();

const renderComponent = () => {
  return (render(<NameStep cb={callBackFn} />));
}

test('should show input for age', () => {
  renderComponent();

  const FirstNameInput =  screen.getByText(/First name/i)
  const LastNameInput =  screen.getByText(/Last name/i)

  expect(FirstNameInput).toBeInTheDocument();
  expect(LastNameInput).toBeInTheDocument();
});

test('should call callback function on submit', () => {
  const mockSubmit = jest.fn();

  render(<NameStep cb={mockSubmit} />)
  fireEvent.change(screen.getByLabelText(/First name/i), { target: { value: 'Myname' } });
  fireEvent.change(screen.getByLabelText(/Last name/i), { target: { value: 'myLastName' } });
  clickNextButton();

  expect(mockSubmit).toHaveBeenCalled();
});

test('should not call callback function if validation failed', () => {
  const mockSubmit = jest.fn();

  render(<NameStep cb={mockSubmit} />)
  fireEvent.change(screen.getByLabelText(/First name/i), { target: { value: '' } });
  fireEvent.change(screen.getByLabelText(/Last name/i), { target: { value: 'Lastname' } });
  clickNextButton();

  expect(mockSubmit).not.toHaveBeenCalled();
});




