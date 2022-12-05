import PropTypes from 'prop-types';

export const AddCategory = ({ onAddCategory }) => {
  const handleSubmit = event => {
    event.preventDefault();

    const value = event.target.categoryInput?.value;
    if (!value?.trim()) return;

    onAddCategory(value.trim());
    event.target.categoryInput.value = '';
  };

  return (
    <form onSubmit={handleSubmit} aria-label="form">
      <input
        autoFocus
        name="categoryInput"
        type="text"
        placeholder="Buscar gifs"
      />
    </form>
  );
};

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired
};
