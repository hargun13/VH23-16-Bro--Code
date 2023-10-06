import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload"
import styled from "@emotion/styled";
import { addDoc, collection } from "firebase/firestore";
import app, { db } from "../../../firebase";
// import { useParams } from "react-router-dom";
import { UserAuth } from "../../../FirebaseAuthContext/AuthContext";
import 'firebase/storage';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const storage = getStorage(app);

const Personal = () => {

  // const  { userId } = useParams();
  const [selectedFile, setSelectedFile] = useState(null);

  const { user } = UserAuth()

  // const handleUpload = () => {
  //   if (selectedFile) {
  //     const storageRef = ref(db, selectedFile.name); // Create a reference to the file

  //     // Upload the file
  //     uploadBytes(storageRef, selectedFile).then((snapshot) => {
  //       console.log('File uploaded successfully');
  //       setSelectedFile(null);

  //       // Get the download URL after upload
  //       getDownloadURL(storageRef).then((url) => {
  //         console.log('Download URL:', url);
  //       }).catch((error) => {
  //         console.error('Error getting download URL:', error);
  //       });
  //     }).catch((error) => {
  //       console.error('Error uploading file:', error);
  //     });
  //   }
  // };



  const handleFileChange = (event) => {
    // Get the selected file when the input value changes
    setSelectedFile(event.target.files[0]);
  };

  const handleFileChangeAgain = (event) => {
    // Get the selected file when the input value changes
    setSelectedFile(event.target.files[0]);
  };

  const [currentCollege, setCurrentCollege ] = useState("")

  const handleCurrentCollegeChange = (e) => {
    setCurrentCollege(e.target.value)
  }

  const [ currentCGPA, setCurrentCGPA] = useState()

  const handleCurrentCGPAChange = (e) => {
    setCurrentCGPA(e.target.value)
  }

  const [field, setField] = useState()

  const handleFieldChange = (e) => {
    setField(e.target.value)
  }

  const [citizenship, setCitizenship] = useState("")

  const handleCitizenshipChange = (e) => {
    setCitizenship(e.target.value)
  }

  const [anualIncome, setAnnualIncome] = useState()

  const handleAnnualIncomeChange = (e) => {
    setAnnualIncome(e.target.value)
  }

  const [ethinicity, setEthinicity] = useState()

  const handleEthinicityChange = (e) => {
    setEthinicity(e.target.value)
  }

  const saveDetails = () => {
    const dbRef = collection(db, "PersonalDetails")

    const details = {
      userId: user.email,
      CurrentCollege: currentCollege,
      Citizenship: citizenship,
      CurrentCGPA: currentCGPA,
      AnualIncome: anualIncome,
      FieldOfIntrest: field,
      Ethinicity: ethinicity,
      // Resume: selectedFile,
    }

    addDoc( dbRef, details).then(alert("Your Changes Have Been Saved")).catch((error) => {
      console.log(error)
      alert("Data is not saved")
    })
}
  

  return (
    <div className="justify-center">
      <div className="px-10 flex items-center justify-around">
        <div className="flex flex-col items-center justify-around gap-16">
          <TextField
            sx={{ minWidth: 350 }}
            id="outlined-basic"
            label="Current College"
            variant="outlined"
            value={currentCollege}
            onChange={handleCurrentCollegeChange}
          />
          <TextField
            sx={{ minWidth: 350 }}
            id="outlined-basic"
            label="Current CGPA"
            variant="outlined"
            value={currentCGPA}
            onChange={handleCurrentCGPAChange}
          />
          <TextField
            sx={{ minWidth: 350 }}
            id="outlined-basic"
            label="Field Of Interest For Masters"
            variant="outlined"
            value={field}
            onChange={handleFieldChange}
          />
        </div>
        <div className="flex flex-col items-center justify-around gap-16">
          <TextField
            sx={{ minWidth: 350 }}
            id="outlined-basic"
            label="Citizenship"
            variant="outlined"
            value={citizenship}
            onChange={handleCitizenshipChange}
          />
          <TextField
            sx={{ minWidth: 350 }}
            id="outlined-basic"
            label="Annual Income"
            variant="outlined"
            type="number"
            value={anualIncome}
            onChange={handleAnnualIncomeChange}
          />
          <FormControl sx={{ minWidth: 350 }}>
            <InputLabel id="demo-simple-select-label">
              What is your enthinicity?
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={ethinicity}
              label="What is your ethinicity?"
              onChange={handleEthinicityChange}
            >
              <MenuItem value={"Hindi"}>Hindi</MenuItem>
              <MenuItem value={"Bengali"}>Bengali</MenuItem>
              <MenuItem value={"Punjabi"}>Punjabi</MenuItem>
              <MenuItem value={"Tamil"}>Tamil</MenuItem>
              <MenuItem value={"Kannad"}>Kannad</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="flex flex-col items-start justify-start gap-16">
          {!selectedFile && (<Button
            component="label"
            variant="outlined"
            startIcon={<CloudUploadIcon />}
            value={selectedFile}
            onChange={handleFileChange}
          >
            Upload Resume/CV
            <VisuallyHiddenInput type="file" />
          </Button>)}
            {selectedFile && (<Button
            component="label"
            variant="outlined"
            startIcon={<CloudUploadIcon />}
            value={selectedFile}
            onChange={handleFileChangeAgain}
          >
            Uploaded Resume/CV
            <VisuallyHiddenInput type="file" />
          </Button>)}
        </div>
      </div>

      <div className="w-full flex items-center justify-center mt-10">
        <Button
          style={{
            paddingLeft: "36px",
            paddingRight: "36px",
            paddingTop: "12px",
            paddingBottom: "12px",
          }}
          className=" text-white text-xl font-bold flex items-center justify-center gap-5  group "
          variant="contained" onClick={saveDetails}
        >
          Save Details
        </Button>
      </div>
    </div>
  );
};

export default Personal;

