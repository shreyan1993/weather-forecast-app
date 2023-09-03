import { LocationData } from 'components/Organism/Search/Search.types';
import { useState, useEffect } from 'react';

interface SearchData {
  searchedLocationData: LocationData[];
}

export const useLocationSearch = (cityName: string): SearchData => {
  const [searchedLocationData, setSearchedLocationData] = useState<LocationData[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cityName) {
        fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=13ce01a858d7aa682de82049bf7803f7`
        )
          .then((response) => response.json())
          .then((data) => setSearchedLocationData(data));
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [cityName]);

  return { searchedLocationData };
};
