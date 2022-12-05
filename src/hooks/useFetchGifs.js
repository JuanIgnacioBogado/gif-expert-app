import { useEffect, useState } from 'react';

import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = category => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await getGifs(category);
      setGifs(data);
      setIsLoading(false);
    })();
  }, []);

  return { isLoading, gifs };
};
