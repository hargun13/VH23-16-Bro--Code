import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase';
import { Select } from '@mui/material';
import { UserAuth } from '../../../FirebaseAuthContext/AuthContext';
// import { useRoleContext } from '../../../login_signup/roleContext';



const Overview = () => {
    const { user } = UserAuth();
    const [selectedDate, setSelectedDate] = useState("");

    const handleDateChange = (date) => {
        setSelectedDate(date.target.value);
    };

    const [gender, setGender] = useState(null);

    const handleChange = (e) => {
        setGender(e.target.value);
        
    };
    console.log(gender)

    const [firstName, setFirstName] = useState("")

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
        
    };

    const [email, setEmail] = useState("")

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        
    };

    const [lastName, setLastName] = useState("")

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
        
    };

    const [number, setNumber] = useState("")

    const handleNumberChange = (e) => {
        setNumber(e.target.value);
        
    };

    const [zipCode, setZipCode] = useState("")

    const handleZipCodeChange = (e) => {
        setZipCode(e.target.value);
        
    };

    const [add1, setAdd1] = useState("")
    const [add2,setAdd2] = useState("")
    const [state, setState] = useState("")

    const handleAddress1Change = (e) => {
        setAdd1(e.target.value);
    };
    const handleAddress2Change = (e) => {
        setAdd2(e.target.value);
    };
    const handleStateChange = (e) => {
        setState(e.target.value);
    };

    const saveDetails = (e) => {

        const dbRef = collection(db, "User")
        
        const details = {
            userId: user.email,
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            PhoneNumber: number,
            Gender: gender,
            ZipCode: zipCode,
            Address: add1 + ","  + add2 + "," + state,
        }

        addDoc( dbRef, details).then(alert("Your Changes Have Been Saved")).catch((error) => {
            console.log(error)
            alert("Data is not saved")
          })
    }

  return (
    <div className='justify-center'>
        <div className='px-10 flex items-center justify-around'>

            <div className='flex flex-col items-center justify-around gap-16'>
                <TextField id="FirstName" label="First Name" variant="outlined" onChange={handleFirstNameChange} /> 
                <TextField id="Email" label="Email" type="email" variant="outlined" value={email} onChange={handleEmailChange}/>
                <input id='Date' label="Birth Date" value={selectedDate} onChange={handleDateChange} type="date" className='py-4 px-9 rounded-md border border-[#c4c4c4]'/>
            </div>
            <div className='flex flex-col items-center justify-around gap-16'>
                <TextField id="LastName" label="Last Name" variant="outlined" value={lastName} onChange={handleLastNameChange} /> 
                <TextField id="PhoneNumber" label="Phone Number" variant="outlined" type="number" value={number} onChange={handleNumberChange} />
                <FormControl sx={{ minWidth: 225 }}>
                    <InputLabel id="Gender">Gender</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="Gender"
                    value={gender}
                    label="Gender"
                    onChange={handleChange}
                    >
                    <MenuItem value={'male'}>Male</MenuItem>
                    <MenuItem value={'female'}>Female</MenuItem>
                    <MenuItem value={'rather_not_say'}>Rather Not Say</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div className='flex flex-col items-center justify-around gap-16'>
                {/*    - Address:
                        - City:
                        - State/Province:
                        - Zip/Postal Code:
                        - Preferred Contact Method (Phone/Email):
                */}
                <TextField id="outlined-basic" label="Address Line 1" variant="outlined" onChange={handleAddress1Change}/>
                <TextField id="outlined-basic" label="Address Line 2" variant="outlined" onChange={handleAddress2Change}/>
                <TextField id="outlined-basic" label="State/Province" variant="outlined" onChange={handleStateChange}/>
                <TextField id="outlined-basic" label="Zip/Postal Code" type='number' variant="outlined" value={zipCode} onChange={handleZipCodeChange}/>
            </div>

            
        </div>

        <div className='w-full flex items-center justify-center mt-10'>  
            <Button style={{paddingLeft:"36px", paddingRight:"36px", paddingTop:"12px", paddingBottom:"12px"}}
            className=' text-white text-xl font-bold flex items-center justify-center gap-5  group ' variant='contained' onClick={saveDetails}>

            Save Details

            </Button>
        </div>
    </div>
  )
}

export default Overview