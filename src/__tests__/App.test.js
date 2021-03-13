import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

it('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});
