import { useEffect, useState } from 'react';

import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = category => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await getGifs(category);
      setGifs(data);
      setLoading(false);
    })();
  }, []);

  return { loading, gifs };
};
