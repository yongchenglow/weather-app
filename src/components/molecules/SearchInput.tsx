import { Box, Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput: React.FC = () => {
  return (
    <Box display="flex" gap={{ xs: 1.25, md: 2.5 }}>
      <TextField label="Country or City" variant="filled" type="text" fullWidth />
      <Button variant="contained">
        <SearchIcon fontSize="large" />
      </Button>
    </Box>
  );
};

export default SearchInput;
