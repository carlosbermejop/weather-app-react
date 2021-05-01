import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

it('renders learn react link', () => {
  render(<App />)
  const btnQuery = screen.getByText(/query/i)
  expect(btnQuery).toBeInTheDocument()
})
