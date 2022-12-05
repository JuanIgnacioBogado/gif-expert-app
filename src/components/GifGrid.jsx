import PropTypes from 'prop-types';

import { GifItem } from './';

import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  if (isLoading) return <h2>Cargando...</h2>;

  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {gifs?.map(gif => (
          <GifItem
            {...{
              ...gif,
              key: gif.id
            }}
          />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
};
