import * as React from "react";
import { FC, useState } from "react";
import {
  FormControlLabel,
  FormGroup,
  Checkbox,
  TextField,
  Box,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Button,
} from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function Home() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "male",
    hobby: [],
    status: "",
    note: "",
  });

  // สำหรับการอัพเดทข้อมูลภายใน
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  // สำหรับการรับข้อมูล
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          backgroundColor: "#2196F3",
          height: "65px",
          alignItems: "center",
          mb: 6,
        }}>
        <Typography variant="h3" sx={{ textAlign: "center", color: "#FFFF" }}>
          User profile management System
        </Typography>
      </Box>
      <Box sx={{ width: "40vw", ml: 3 }}>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 3 }}>
          Profile management
        </Typography>
        <form onSubmit={handleOnSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              borderRadius: 2,
              boxShadow: 2,
              p: 2,
            }}>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
              <TextField
                sx={{ width: "50%" }}
                label="Name"
                variant="outlined"
                name="firstName"
                value={form.firstName}
                type="text"
                onChange={handleOnChange}
                className="firstName"
              />
              <TextField
                sx={{ width: "50%" }}
                label="Last name"
                variant="outlined"
                name="lastName"
                value={form.lastName}
                type="text"
                onChange={handleOnChange}
                className="lastName"
              />
            </Box>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              value={form.email}
              type="text"
              onChange={handleOnChange}
              className="email"
            />
            <FormControlLabel
              name="Confirm PDPA"
              value="PDPA"
              control={<Checkbox />}
              label="Confirm PDPA"
              labelPlacement="end"
            />
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
              <FormControl>
                <FormLabel>Gender</FormLabel>
                <RadioGroup
                  row
                  defaultValue="male"
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="gender"
                  value={form.gender}
                  onChange={handleOnChange}>
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="Etc" control={<Radio />} label="Etc" />
                </RadioGroup>
              </FormControl>

              <FormControl>
                <FormLabel>Hobby</FormLabel>
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    name="hobby"
                    value={form.hobby}
                    control={<Checkbox />}
                    label="Game"
                    onChange={handleOnChange}
                  />
                  <FormControlLabel
                    name="hobby"
                    value={form.hobby}
                    control={<Checkbox />}
                    label="Music"
                    onChange={handleOnChange}
                  />
                  <FormControlLabel
                    name="hobby"
                    value={form.hobby}
                    control={<Checkbox />}
                    label="Craft"
                    onChange={handleOnChange}
                  />
                  <FormControlLabel
                    name="hobby"
                    value={form.hobby}
                    control={<Checkbox />}
                    label="Reading"
                    onChange={handleOnChange}
                  />
                </FormGroup>
              </FormControl>
            </Box>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                value={form.status}
                label="Status"
                name="status"
                onChange={handleOnChange}>
                <MenuItem value={"Single"}>Single</MenuItem>
                <MenuItem value={"Married"}>Married</MenuItem>
                <MenuItem value={"Divorce"}>Divorce</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              label="Note"
              variant="outlined"
              value={form.note}
              name="note"
              onChange={handleOnChange}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
                justifyContent: "flex-end",
                mt: 2,
              }}>
              <Button variant="contained">RESET</Button>
              <Button variant="contained" type="submit" className="submit">
                SUBMIT
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
      {/* <div>
        {Object.values(form).map((value, index) => (
          <h1 key={index}>{value}</h1>
        ))}
      </div> */}
    </>
  );
}










// import * as React from "react";
// import { FC, useState } from "react";
// import {
//   FormControlLabel,
//   FormGroup,
//   Checkbox,
//   TextField,
//   Box,
//   Typography,
//   FormControl,
//   FormLabel,
//   RadioGroup,
//   Radio,
//   InputLabel,
//   MenuItem,
//   Select,
//   SelectChangeEvent,
//   Button,
// } from "@mui/material";

// const Home: FC = () => {
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     gender: "male",
//     hobby: [] as string[],
//     status: "",
//     note: "",
//   });

//   const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = event.target;

//     setForm((prevForm) => ({
//       ...prevForm,
//       [name]: type === "checkbox" ? (checked ? [...prevForm.hobby, value] : prevForm.hobby.filter(h => h !== value)) : value,
//     }));
//   };

//   const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(form);
//   };

//   return (
//     <>
//       <Box
//         sx={{
//           width: "100vw",
//           backgroundColor: "#2196F3",
//           height: "65px",
//           alignItems: "center",
//           mb: 6,
//         }}>
//         <Typography variant="h3" sx={{ textAlign: "center", color: "#FFFF" }}>
//           User profile management System
//         </Typography>
//       </Box>
//       <Box sx={{ width: "40vw", ml: 3 }}>
//         <Typography variant="h4" sx={{ textAlign: "center", mb: 3 }}>
//           Profile management
//         </Typography>
//         <form onSubmit={handleOnSubmit}>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               gap: 2,
//               borderRadius: 2,
//               boxShadow: 2,
//               p: 2,
//             }}>
//             <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
//               <TextField
//                 sx={{ width: "50%" }}
//                 label="Name"
//                 variant="outlined"
//                 name="firstName"
//                 value={form.firstName}
//                 type="text"
//                 onChange={handleOnChange}
//                 className="firstName"
//               />
//               <TextField
//                 sx={{ width: "50%" }}
//                 label="Last name"
//                 variant="outlined"
//                 name="lastName"
//                 value={form.lastName}
//                 type="text"
//                 onChange={handleOnChange}
//                 className="lastName"
//               />
//             </Box>
//             <TextField
//               fullWidth
//               label="Email"
//               variant="outlined"
//               name="email"
//               value={form.email}
//               type="text"
//               onChange={handleOnChange}
//               className="email"
//             />
//             <FormControlLabel
//               name="Confirm PDPA"
//               value="PDPA"
//               control={<Checkbox />}
//               label="Confirm PDPA"
//               labelPlacement="end"
//               onChange={handleOnChange}
//             />
//             <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
//               <FormControl>
//                 <FormLabel>Gender</FormLabel>
//                 <RadioGroup
//                   row
//                   defaultValue="male"
//                   aria-labelledby="demo-row-radio-buttons-group-label"
//                   name="gender"
//                   value={form.gender}
//                   onChange={handleOnChange}>
//                   <FormControlLabel value="male" control={<Radio />} label="Male" />
//                   <FormControlLabel value="female" control={<Radio />} label="Female" />
//                   <FormControlLabel value="Etc" control={<Radio />} label="Etc" />
//                 </RadioGroup>
//               </FormControl>

//               <FormControl>
//                 <FormLabel>Hobby</FormLabel>
//                 <FormGroup aria-label="position" row>
//                   {["Game", "Music", "Craft", "Reading"].map((hobby) => (
//                     <FormControlLabel
//                       key={hobby}
//                       name="hobby"
//                       value={hobby}
//                       control={<Checkbox />}
//                       label={hobby}
//                       onChange={handleOnChange}
//                     />
//                   ))}
//                 </FormGroup>
//               </FormControl>
//             </Box>
//             <FormControl fullWidth>
//               <InputLabel>Status</InputLabel>
//               <Select
//                 value={form.status}
//                 label="Status"
//                 name="status"
//                 onChange={handleOnChange}>
//                 {["Single", "Married", "Divorce"].map((status) => (
//                   <MenuItem key={status} value={status}>
//                     {status}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>

//             <TextField
//               fullWidth
//               label="Note"
//               variant="outlined"
//               value={form.note}
//               name="note"
//               onChange={handleOnChange}
//             />
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "row",
//                 gap: 2,
//                 justifyContent: "flex-end",
//                 mt: 2,
//               }}>
//               <Button variant="contained">RESET</Button>
//               <Button variant="contained" type="submit" className="submit">
//                 SUBMIT
//               </Button>
//             </Box>
//           </Box>
//         </form>
//       </Box>
//     </>
//   );
// };

// export default Home;
