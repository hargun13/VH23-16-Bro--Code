import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Filters = ({ onFilterChange }) => {
  const [open, setOpen] = React.useState(false);

  // Separate state variables for each filter criteria
  const [locationFilter, setLocationFilter] = React.useState("National");
  const [ageFilter, setAgeFilter] = React.useState("null");
  const [categoryFilter, setCategoryFilter] = React.useState("null");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLocationChange = (e) => {
    const newValue = e.target.value;
    setLocationFilter(newValue);
    onFilterChange(newValue, ageFilter, categoryFilter);
  };

  const handleAgeChange = (e) => {
    const newValue = e.target.value;
    setAgeFilter(newValue);
    onFilterChange(locationFilter, newValue, categoryFilter);
  };

  const handleCategoryChange = (e) => {
    const newValue = e.target.value;
    setCategoryFilter(newValue);
    onFilterChange(locationFilter, ageFilter, newValue);
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        <FilterAltIcon />
        Filter
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Filters
          </Typography>
          <div className="flex justify-evenly">
            <select value={locationFilter} onChange={handleLocationChange}>
              <option value="National">National</option>
              <option value="Delhi">Delhi</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Maharashtra">Maharashtra</option>
            </select>
            <select value={ageFilter} onChange={handleAgeChange}>
              <option value="null">none</option>
              <option value="14">14</option>
              <option value="16-17">16-17</option>
              <option value="18">18</option>
              <option value="18-20">19-20</option>
              <option value="20-25">20-25</option>
              <option value="25-30">25-30</option>
            </select>
            <select value={categoryFilter} onChange={handleCategoryChange}>
              <option value="null">none</option>
              <option value="disability">disability</option>
              <option value="minority">minority</option>
            </select>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Filters;
