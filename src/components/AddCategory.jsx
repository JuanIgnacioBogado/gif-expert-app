export const AddCategory = ({ onAddCategory }) => {
  const handleSubmit = event => {
    event.preventDefault();

    const { value } = event.target.categoryInput;
    if (!value.trim()) return;

    onAddCategory(value.trim());
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        autoFocus
        name="categoryInput"
        type="text"
        placeholder="Buscar gifs"
      />
    </form>
  );
};
