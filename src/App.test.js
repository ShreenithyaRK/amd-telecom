import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home tab', () => {
  render(<App />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders news tab', () => {
  render(<App />);
  const linkElement = screen.getByText(/news/i);
  expect(linkElement).toBeInTheDocument();
});