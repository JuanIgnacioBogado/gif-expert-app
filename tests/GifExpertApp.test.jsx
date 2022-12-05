import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('GifExpertApp', () => {
  test('should to match snapshot', () => {
    const { container } = render(<GifExpertApp />);

    expect(container).toMatchSnapshot();
    expect(screen.getByText(/GifExpertApp/i));
  });
});
