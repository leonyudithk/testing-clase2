import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  //las 3 Areglar Actuar Afirmar
  const linkElement = screen.getByText(/learn react/i);
  //Actuar
  expect(linkElement).toBeInTheDocument();
});
