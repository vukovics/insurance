import { fireEvent, screen } from '@testing-library/react'

export const clickNextButton = () => {
  return (fireEvent.click(screen.getByText(/Next/i)))
}
