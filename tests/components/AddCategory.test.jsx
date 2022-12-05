import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategory } from '../../src/components';

describe('AddCategory', () => {
  test('should to change input value', () => {
    render(<AddCategory onAddCategory={() => {}} />);
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'Saitama' } });
    expect(input.value).toBe('Saitama');
  });

  test('should to call onAddCategory if the input contain value', () => {
    const inputValue = 'Saitama';
    const onAddCategory = jest.fn();

    render(<AddCategory onAddCategory={onAddCategory} />);

    const form = screen.getByRole('form');
    fireEvent.submit(form, {
      target: { categoryInput: { value: inputValue } }
    });

    expect(form.categoryInput.value).toBe('');

    expect(onAddCategory).toBeCalled();
    expect(onAddCategory).toBeCalledTimes(1);
    expect(onAddCategory).toBeCalledWith(inputValue);
  });

  test('should be not call onAddCategory if the input value is empty', () => {
    const onAddCategory = jest.fn();

    render(<AddCategory onAddCategory={onAddCategory} />);

    const form = screen.getByRole('form');
    fireEvent.submit(form);
    // expect(onAddCategory).not.toHaveBeenCalled(); => esto es lo mismo que abajo escrito de diferente manera
    expect(onAddCategory).not.toBeCalled();
  });
});
