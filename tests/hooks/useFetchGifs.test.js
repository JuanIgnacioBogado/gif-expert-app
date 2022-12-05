import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('useFetchGifs', () => {
  test('should to return initial state', () => {
    const {
      result: {
        current: { gifs, isLoading }
      }
    } = renderHook(() => useFetchGifs('One Punch'));

    expect(gifs).toHaveLength(0);
    expect(isLoading).toBeTruthy();
  });

  test('should to return an array and isLoading in false', async () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'));

    await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0));
    const { gifs, isLoading } = result.current;
    expect(gifs.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
