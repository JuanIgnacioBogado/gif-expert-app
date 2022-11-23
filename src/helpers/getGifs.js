export const getGifs = async category => {
  const { VITE_API_KEY } = import.meta.env;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${VITE_API_KEY}&q=${category}&limit=20`;
  const res = await fetch(url);
  const { data } = await res.json();

  const gifs = data?.map(({ id, title, images }) => ({
    id,
    title,
    url: images?.downsized_medium?.url
  }));

  return gifs;
};
