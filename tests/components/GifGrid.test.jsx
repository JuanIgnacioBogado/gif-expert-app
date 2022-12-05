import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('GifGrid', () => {
  const category = 'One Punch';

  test('should to show initial loading', () => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true
    });

    render(<GifGrid {...{ category }} />);
    expect(screen.getByText(/cargando/i));
  });

  test('should to show items when images loaded with useFetchGifs', () => {
    const gifs = [
      {
        id: 'abc',
        title: 'Saitama',
        url: 'https://localhost/saitama.jpg'
      },
      {
        id: 'abcd',
        title: 'Saitama2',
        url: 'https://localhost/saitama2.jpg'
      }
    ];

    useFetchGifs.mockReturnValue({
      gifs,
      isLoading: false
    });

    render(<GifGrid {...{ category }} />);
    expect(screen.getAllByRole('img')).toHaveLength(2);
  });
});
