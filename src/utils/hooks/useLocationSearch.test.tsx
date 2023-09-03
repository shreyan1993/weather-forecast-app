import { renderHook, act } from '@testing-library/react-hooks';
import { useLocationSearch } from './useLocationSearch';
import fetch from 'node-fetch';

jest.mock('node-fetch', () => {
  return jest.fn();
});

const mockLocationData = [
  {
    name: 'City1',
    lat: 1.23,
    lon: 4.56,
  },
  {
    name: 'City2',
    lat: 7.89,
    lon: 0.12,
  },
];

describe('useLocationSearch Hook', () => {
  it('handles no city name provided', async () => {
    const { result } = renderHook(() => useLocationSearch(''));

    expect(fetch).not.toHaveBeenCalled();
    expect(result.current.searchedLocationData).toEqual([]);
  });

  it('fetches location data for a city', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: async () => mockLocationData,
    } as Response);

    const { result, waitForNextUpdate } = renderHook(() => useLocationSearch('TestCity'));

    expect(result.current.searchedLocationData).toEqual([]);

    await waitForNextUpdate();

    expect(result.current.searchedLocationData).toEqual(mockLocationData);
    expect(global.fetch).toHaveBeenCalledWith(
      'http://api.openweathermap.org/geo/1.0/direct?q=TestCity&limit=5&appid=13ce01a858d7aa682de82049bf7803f7'
    );

    (global.fetch as jest.Mock).mockRestore();
  });
});
