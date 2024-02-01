
import { TextField, Button } from '@mui/material';

const Categories = () => {
  const handleSearch = () => {
    // Lógica de búsqueda
  };

  return (
    <div>
      <div></div>
      <form>
        <TextField
          placeholder="Find Category"
          variant="outlined"
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </form>
    </div>
  );
};

export default Categories;
