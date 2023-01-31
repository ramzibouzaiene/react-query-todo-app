import { render, screen } from '@testing-library/react';
import App from './App';

test('renders todo title', () => {
  render(<App />);
  const linkElement = screen.getByText("Todo List");
  expect(linkElement).toBeInTheDocument();
});
