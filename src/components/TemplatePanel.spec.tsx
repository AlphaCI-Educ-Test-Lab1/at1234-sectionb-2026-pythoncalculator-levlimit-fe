import { fireEvent, render, screen } from '@testing-library/react';
import { TemplatePanel } from './TemplatePanel';

describe('TemplatePanel', () => {
  it('adds the starting values', () => {
    render(<TemplatePanel />);
    expect(screen.getByRole('status')).toHaveTextContent('4');
  });

  it('adds what the user types', () => {
    render(<TemplatePanel />);
    fireEvent.change(screen.getByLabelText('First number'), { target: { value: '10' } });
    expect(screen.getByRole('status')).toHaveTextContent('12');
  });

  it('asks for numbers when an input is not one', () => {
    render(<TemplatePanel />);
    fireEvent.change(screen.getByLabelText('First number'), { target: { value: 'x' } });
    expect(screen.getByRole('status')).toHaveTextContent('Enter two numbers');
  });
});
