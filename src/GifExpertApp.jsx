import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = category => {
    if (categories.includes(category)) return;
    setCategories([category, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onAddCategory={onAddCategory} />

      {categories?.map(category => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

// api.giphy.com/v1/gifs/search
// apikey = qMUU5g4MSg4kxEjTvdK3qM6zNYC3clH5
