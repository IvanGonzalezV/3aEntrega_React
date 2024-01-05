import React from 'react';
import { TextField, Button } from '@mui/material';

const Categories = () => {
  return (
    <div>
      <div></div>
      <form>
        <TextField
          placeholder="Find Category"
          variant="outlined"
        />
        <button>
          <Button variant="contained">Search</Button>
        </button>
      </form>
    </div>
  );
};

export default Categories;