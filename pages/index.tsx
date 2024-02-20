import * as React from "react";
import { useState } from "react";
import {
  FormControlLabel,
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
  const [profile, setProfile] = useState([]);
  const [Status, setAge] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
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
            <TextField sx={{ width: "50%" }} label="Name" variant="outlined" />
            <TextField sx={{ width: "50%" }} label="Last name" variant="outlined" />
          </Box>
          <TextField fullWidth label="Email" variant="outlined" />
          <FormControlLabel
            value="end"
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
                name="row-radio-buttons-group">
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="other" control={<Radio />} label="Etc" />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Hobby</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group">
                <FormControlLabel value="Game" control={<Checkbox />} label="Game" />
                <FormControlLabel value="Music" control={<Checkbox />} label="Music" />
                <FormControlLabel value="Craft" control={<Checkbox />} label="Craft" />
                <FormControlLabel
                  value="Reading"
                  control={<Checkbox />}
                  label="Reading"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select value={Status} label="Status" onChange={handleChange}>
              <MenuItem value={"Single"}>Single</MenuItem>
              <MenuItem value={"Married"}>Married</MenuItem>
              <MenuItem value={"Divorce"}>Divorce</MenuItem>
            </Select>
          </FormControl>
          <TextField fullWidth label="Note" variant="outlined" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              justifyContent: "flex-end",
              mt: 2,
            }}>
            <Button variant="contained">RESET</Button>
            <Button variant="contained">SUBMIT</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
