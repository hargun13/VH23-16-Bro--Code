import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const ScholarshipCalculator = () => {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [scholarshipPercentage, setScholarshipPercentage] = useState(null);

  const calculateScholarship = () => {
    const incomeFloat = parseFloat(income);
    const expensesFloat = parseFloat(expenses);

    if (!isNaN(incomeFloat) && !isNaN(expensesFloat)) {
      const scholarshipPercentage =
        ((incomeFloat - expensesFloat) / incomeFloat) * 100;
      setScholarshipPercentage(scholarshipPercentage.toFixed(2)); // Rounded to 2 decimal places
    }
  };

  return (
    <div>
      <div className="flex justify-evenly items-center pb-10">
        <p className="text-4xl px-10">Financial Aid Calculator</p>
      </div>

      <Paper
        className="flex justify-evenly items-center p-10 m-6"
        elevation={4}
      >
        <TextField
          sx={{ minWidth: 350 }}
          id="outlined-basic"
          label="Number Of Family Members"
          variant="outlined"
          type="number"
        />

        <TextField
          sx={{ minWidth: 350 }}
          id="outlined-basic"
          label="Number Of Children In College"
          variant="outlined"
          type="number"
        />

        <FormControl sx={{ minWidth: 350 }}>
          <InputLabel id="demo-simple-select-label">
            Primary Residancy
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Primary Residance"
          >
            <MenuItem value={"Maharashtra"}>Maharashtra</MenuItem>
            <MenuItem value={"Gujrat"}>Gujrat</MenuItem>
            <MenuItem value={"Punjab"}>Punjab</MenuItem>
            <MenuItem value={"Tamil Nadu"}>Tamil Nadu</MenuItem>
            <MenuItem value={"Orissa"}>Orissa</MenuItem>
          </Select>
        </FormControl>
      </Paper>

      <Paper
        className="flex-col justify-evenly items-center pt-16 m-6"
        elevation={4}
      >
        <div className="flex justify-evenly items-center pb-10">
          <TextField
            sx={{ minWidth: 350 }}
            id="outlined-basic"
            label="Parent Income/Gross Income"
            variant="outlined"
            type="number"
          />

          <TextField
            sx={{ minWidth: 350 }}
            id="outlined-basic"
            label="Intrest/Dividend Income"
            variant="outlined"
            type="number"
          />

          <TextField
            sx={{ minWidth: 350 }}
            id="outlined-basic"
            label="Buisness/Farm Income"
            variant="outlined"
            type="number"
          />
        </div>

        <div className="flex justify-evenly items-center pb-10">
          <TextField
            sx={{ minWidth: 350 }}
            id="outlined-basic"
            label="Real Estate Income"
            variant="outlined"
            type="number"
          />

          <TextField
            sx={{ minWidth: 350 }}
            id="outlined-basic"
            label="Other Income"
            variant="outlined"
            type="number"
          />
        </div>
      </Paper>

      <Paper
        className="flex-col justify-evenly items-center pt-16 m-6"
        elevation={4}
      >
        <div className="flex justify-evenly items-center pb-10">
          <TextField
            sx={{ minWidth: 350 }}
            id="outlined-basic"
            label="Cash And Investment"
            variant="outlined"
            type="number"
          />

          <TextField
            sx={{ minWidth: 350 }}
            id="outlined-basic"
            label="Buisness/Farm Equity"
            variant="outlined"
            type="number"
          />

          <TextField
            sx={{ minWidth: 350 }}
            id="outlined-basic"
            label="Real Estate Equity (Not Home)"
            variant="outlined"
            type="number"
          />
        </div>

        <div className="flex justify-evenly items-center pb-10">
          <TextField
            sx={{ minWidth: 350 }}
            id="outlined-basic"
            label="Other Assets"
            variant="outlined"
            type="number"
          />

          <TextField
            sx={{ minWidth: 350 }}
            id="outlined-basic"
            label="Other Income"
            variant="outlined"
            type="number"
          />
        </div>
      </Paper>

      <div className="w-full flex items-center justify-center mt-10">
        <Button
          style={{
            paddingLeft: "36px",
            paddingRight: "36px",
            paddingTop: "12px",
            paddingBottom: "12px",
          }}
          className=" text-white text-xl font-bold flex items-center justify-center gap-5  group "
          variant="contained"
        >
          Calculate
        </Button>
      </div>
      {scholarshipPercentage !== null && (
        <div>
          <p>Scholarship Percentage: {scholarshipPercentage}%</p>
        </div>
      )}
    </div>
  );
};

export default ScholarshipCalculator;
